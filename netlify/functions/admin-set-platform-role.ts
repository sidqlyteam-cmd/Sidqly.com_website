import { Handler } from '@netlify/functions';
import { createResponse, handleOptions } from './_shared/response';
import { authenticate } from './_shared/authenticate';
import { requireSuperAdmin } from './_shared/authorize';
import { adminDb, adminAuth } from './_shared/firebaseAdmin';
import { handleError, ApiError } from './_shared/errors';
import { FieldValue } from 'firebase-admin/firestore';

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return handleOptions();
  if (event.httpMethod !== 'POST') return createResponse(405, { error: 'Method Not Allowed' });

  try {
    const decodedToken = await authenticate(event.headers.authorization);
    await requireSuperAdmin(decodedToken);

    if (!event.body) throw new ApiError('Missing request body', 400);
    const { targetUid, newRole } = JSON.parse(event.body);

    if (!targetUid || !newRole) throw new ApiError('Missing uid or role', 400);

    const allowedRoles = ['super_admin', 'platform_admin', 'operations_manager', 'support_manager', 'compliance_reviewer', 'finance_manager', 'platform_auditor'];
    if (!allowedRoles.includes(newRole)) throw new ApiError('Invalid role', 400);

    if (newRole === 'super_admin' && decodedToken.uid !== targetUid) {
        // Prevent removal of last active super admin etc. Need more logic in a real world scenario, but for now we allow addition.
    }

    const userRecord = await adminAuth.getUser(targetUid);
    const currentClaims = userRecord.customClaims || {};

    const newClaims = {
        ...currentClaims,
        platformRole: newRole,
        isSuperAdmin: newRole === 'super_admin',
        accessVersion: ((currentClaims.accessVersion as number) || 0) + 1
    };

    await adminAuth.setCustomUserClaims(targetUid, newClaims);
    await adminAuth.revokeRefreshTokens(targetUid);

    const userRef = adminDb.collection('users').doc(targetUid);
    await adminDb.runTransaction(async (t) => {
        t.update(userRef, {
            platformRole: newRole,
            role: newRole,
            isSuperAdmin: newRole === 'super_admin',
            updatedAt: FieldValue.serverTimestamp(),
            updatedBy: decodedToken.uid
        });

        t.set(adminDb.collection('auditLogs').doc(), {
            action: 'ROLE_CHANGED',
            targetUid,
            newRole,
            performedBy: decodedToken.uid,
            createdAt: FieldValue.serverTimestamp()
        });
    });

    return createResponse(200, { success: true });
  } catch (error) {
    const { statusCode, error: errorMessage } = handleError(error);
    return createResponse(statusCode, { error: errorMessage });
  }
};
