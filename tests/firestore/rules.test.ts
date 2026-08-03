import { readFileSync } from 'fs';
import { initializeTestEnvironment, assertFails, assertSucceeds, RulesTestEnvironment } from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

let testEnv: RulesTestEnvironment;

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: 'sidqly-prod-test',
    firestore: {
      rules: readFileSync('firestore.rules', 'utf8'),
      host: '127.0.0.1',
      port: 8080
    }
  });
});

afterAll(async () => {
  await testEnv.cleanup();
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

describe('Firestore Rules', () => {

  it('should prevent unauthenticated access', async () => {
    const unauthedDb = testEnv.unauthenticatedContext().firestore();
    await assertFails(getDoc(doc(unauthedDb, 'users', 'someId')));
  });

  it('should allow Super Admin to read all users', async () => {
    // Note: requires setting up the user doc first since isSuperAdmin checks status == 'active'
    await testEnv.withSecurityRulesDisabled(async (context) => {
        await setDoc(doc(context.firestore(), 'users', 'QUIyjLUr3fNDiodYnZLRGLg21om2'), { status: "active" });
    });
    const adminDb = testEnv.authenticatedContext('QUIyjLUr3fNDiodYnZLRGLg21om2', {
      email: 'sidqly.team@gmail.com',
      isSuperAdmin: true,
      platformRole: 'super_admin'
    }).firestore();

    await assertSucceeds(getDoc(doc(adminDb, 'users', 'otherId')));
  });

  it('should prevent demo account from admin access', async () => {
     const demoDb = testEnv.authenticatedContext('demoUid', {
       email: 'admin.demo@sidqly.com'
     }).firestore();

     await assertFails(getDoc(doc(demoDb, 'users', 'otherId')));
  });

  it('should allow user to read their own data', async () => {
    const userDb = testEnv.authenticatedContext('myId', { email: 'user@example.com' }).firestore();
    await assertSucceeds(getDoc(doc(userDb, 'users', 'myId')));
  });

  it('should prevent user from reading other user data', async () => {
    const userDb = testEnv.authenticatedContext('myId', { email: 'user@example.com' }).firestore();
    await assertFails(getDoc(doc(userDb, 'users', 'otherId')));
  });

  it('should prevent users from updating roles', async () => {
    const userDb = testEnv.authenticatedContext('myId', { email: 'user@example.com' }).firestore();
    // create the doc as admin first for update test
    await testEnv.withSecurityRulesDisabled(async (context) => {
        await setDoc(doc(context.firestore(), 'users', 'myId'), { name: "Test", role: "user" });
    });

    // try to update role
    await assertFails(updateDoc(doc(userDb, 'users', 'myId'), { role: 'super_admin' }));
  });

  it('should allow users to update their name', async () => {
    const userDb = testEnv.authenticatedContext('myId', { email: 'user@example.com' }).firestore();
    await testEnv.withSecurityRulesDisabled(async (context) => {
        await setDoc(doc(context.firestore(), 'users', 'myId'), { name: "Test", role: "user" });
    });

    await assertSucceeds(updateDoc(doc(userDb, 'users', 'myId'), { name: 'New Name' }));
  });

  it('should prevent ordinary users from listing audit logs', async () => {
     const userDb = testEnv.authenticatedContext('myId').firestore();
     await assertFails(getDoc(doc(userDb, 'auditLogs', 'someLog')));
  });

  it('should prevent Organization A from reading Organization B', async () => {
      // Create user doc where orgs are [OrgA]
      await testEnv.withSecurityRulesDisabled(async (context) => {
        await setDoc(doc(context.firestore(), 'users', 'myId'), { status: "active", organizations: ['OrgA'] });
      });
      const userDb = testEnv.authenticatedContext('myId', { email: 'user@example.com' }).firestore();

      // Attempt to read Org B
      await assertFails(getDoc(doc(userDb, 'organizations', 'OrgB')));

      // Attempt to read Org A
      await assertSucceeds(getDoc(doc(userDb, 'organizations', 'OrgA')));
  });
});
