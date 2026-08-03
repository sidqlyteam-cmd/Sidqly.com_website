import { initializeApp, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// Check if running on sidqly-prod
if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PROJECT_ID !== 'sidqly-prod') {
  if (process.env.FORCE_RUN !== 'true') {
    console.error("Refusing to run against non-prod project unless FORCE_RUN=true is set.");
    process.exit(1);
  }
}

// Initialize Admin SDK
initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID || 'sidqly-prod',
});

const auth = getAuth();
const db = getFirestore();

const EXPECTED_UID = 'QUIyjLUr3fNDiodYnZLRGLg21om2';
const REAL_EMAIL = 'sidqly.team@gmail.com';
const DEMO_EMAIL = 'admin.demo@sidqly.com';

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

async function runRepair() {
  console.log(`Starting Super Admin Repair Script`);
  const projectId = getApp().options.projectId;
  console.log(`Project: ${projectId}`);
  if (isDryRun) {
    console.log(`*** RUNNING IN DRY-RUN MODE - NO CHANGES WILL BE MADE ***`);
  }

  let existingAuthUser;
  try {
    existingAuthUser = await auth.getUser(EXPECTED_UID);
    console.log(`Found user by UID ${EXPECTED_UID}. Current Email: ${existingAuthUser.email}`);
  } catch (error: unknown) {
    if ((error as { code?: string }).code === 'auth/user-not-found') {
      console.log(`User with UID ${EXPECTED_UID} not found in Auth.`);
    } else {
      console.error(`Error looking up user by UID:`, error);
      process.exit(1);
    }
  }

  let realEmailUser;
  try {
    realEmailUser = await auth.getUserByEmail(REAL_EMAIL);
    console.log(`Found user by REAL_EMAIL (${REAL_EMAIL}). UID: ${realEmailUser.uid}`);
  } catch (error: unknown) {
    if ((error as { code?: string }).code !== 'auth/user-not-found') {
      console.error(`Error looking up user by real email:`, error);
    }
  }

  let demoEmailUser;
  try {
    demoEmailUser = await auth.getUserByEmail(DEMO_EMAIL);
    console.log(`Found user by DEMO_EMAIL (${DEMO_EMAIL}). UID: ${demoEmailUser.uid}`);
  } catch (error: unknown) {
    if ((error as { code?: string }).code !== 'auth/user-not-found') {
      console.error(`Error looking up user by demo email:`, error);
    }
  }

  // Reconciliation Logic
  const targetUid = EXPECTED_UID;
  let emailUpdated = false;

  if (existingAuthUser && existingAuthUser.email === REAL_EMAIL) {
    console.log(`CASE A: User UID matches REAL_EMAIL. Reusing account.`);
    if (existingAuthUser.disabled) {
      if (!isDryRun) await auth.updateUser(targetUid, { disabled: false });
      console.log(`[Action] Enabled previously disabled user account.`);
    }
  } else if (existingAuthUser && existingAuthUser.email === DEMO_EMAIL && !realEmailUser) {
    console.log(`CASE B: Updating demo email to real email.`);
    if (!isDryRun) {
      await auth.updateUser(targetUid, {
        email: REAL_EMAIL,
        emailVerified: false,
        disabled: false
      });
      // Generate email actions (sanitized logging)
      try {
        await auth.generatePasswordResetLink(REAL_EMAIL);
        await auth.generateEmailVerificationLink(REAL_EMAIL);
        console.log(`[Action] Generated reset and verification links for delivery system.`);
      } catch {
        console.log(`[Error] Failed to generate auth links.`);
      }
    } else {
       console.log(`[Dry-Run Action] Would update email to ${REAL_EMAIL} and generate reset/verify links.`);
    }
    emailUpdated = true;
  } else if (realEmailUser && realEmailUser.uid !== EXPECTED_UID) {
    console.log(`CASE C: Blocker! UID conflict. ${REAL_EMAIL} exists under UID ${realEmailUser.uid}, not ${EXPECTED_UID}. Stopping automatic migration.`);
    process.exit(1);
  } else if (!existingAuthUser && !realEmailUser) {
    console.log(`CASE D: Creating new user with UID ${EXPECTED_UID} and email ${REAL_EMAIL}.`);
    if (!isDryRun) {
      await auth.createUser({
        uid: targetUid,
        email: REAL_EMAIL,
        emailVerified: false,
      });
    } else {
      console.log(`[Dry-Run Action] Would create new user with UID ${targetUid}.`);
    }
    emailUpdated = true;
  } else {
    console.log(`Manual action required. Unhandled state.`);
  }

  // Preserve existing claims, add new ones
  let currentClaims: Record<string, unknown> = {};
  if (existingAuthUser) {
      currentClaims = existingAuthUser.customClaims || {};
  } else if (realEmailUser) {
      currentClaims = realEmailUser.customClaims || {};
  }

  console.log(`Claims before: ${JSON.stringify(currentClaims)}`);

  const newClaims = {
    ...currentClaims,
    platformRole: 'super_admin',
    isSuperAdmin: true,
    accessVersion: ((currentClaims.accessVersion as number) || 0) + 1
  };

  if (!isDryRun) {
    await auth.setCustomUserClaims(targetUid, newClaims);
    console.log(`Claims applied: ${JSON.stringify(newClaims)}`);
  } else {
    console.log(`[Dry-Run Action] Would apply claims: ${JSON.stringify(newClaims)}`);
  }

  // Synchronize Firestore profile
  if (!isDryRun) {
    const userRef = db.collection('users').doc(targetUid);
    const userDoc = await userRef.get();

    let createdAt: unknown = FieldValue.serverTimestamp();
    if (userDoc.exists) {
      const data = userDoc.data();
      if (data && data.createdAt) {
        createdAt = data.createdAt;
      }
    }

    const emailVerified = existingAuthUser ? existingAuthUser.emailVerified : false;

    await userRef.set({
      uid: targetUid,
      email: REAL_EMAIL,
      normalizedEmail: REAL_EMAIL,
      name: "Sidqly Super Admin",
      displayName: "Sidqly Super Admin",
      accountType: "platform",
      role: "super_admin",
      platformRole: "super_admin",
      isSuperAdmin: true,
      status: "active",
      organizationId: null,
      primaryOrganizationId: null,
      emailVerified: emailUpdated ? false : emailVerified,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: "system-super-admin-repair",
      createdAt: createdAt
    }, { merge: true });

    console.log(`Profile synchronized.`);

    // Audit event
    await db.collection('auditLogs').add({
      action: "SUPER_ADMIN_REPAIRED",
      targetUid: targetUid,
      targetEmail: REAL_EMAIL,
      performedBy: "system-super-admin-repair",
      createdAt: FieldValue.serverTimestamp()
    });
    console.log(`Audit log written.`);

    // Revoke sessions
    await auth.revokeRefreshTokens(targetUid);
    console.log(`Sessions revoked status: SUCCESS.`);
  } else {
    console.log(`[Dry-Run Action] Would synchronize Firestore profile and write audit log.`);
    console.log(`[Dry-Run Action] Would revoke refresh tokens.`);
  }

  console.log(`Super Admin repair complete.`);
}

runRepair().catch(console.error);
