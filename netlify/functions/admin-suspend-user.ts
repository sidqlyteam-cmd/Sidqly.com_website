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
    const { targetUid } = JSON.parse(event.body);
    if (!targetUid) throw new ApiError('Missing uid', 400);
    if (targetUid === decodedToken.uid) throw new ApiError('Cannot suspend yourself', 400);

    const userRef = adminDb.collection('users').doc(targetUid);
    const doc = await userRef.get();

    if (!doc.exists) throw new ApiError('User not found', 404);
    if (doc.data()?.isSuperAdmin) {
       // Ideally check if this is the LAST super admin before allowing
       console.warn("Attempting to suspend a Super Admin");
    }

    await adminAuth.revokeRefreshTokens(targetUid);

    await adminDb.runTransaction(async (t) => {
        t.update(userRef, {
            status: 'suspended',
            updatedAt: FieldValue.serverTimestamp(),
            updatedBy: decodedToken.uid
        });

        t.set(adminDb.collection('auditLogs').doc(), {
            action: 'USER_SUSPENDED',
            targetUid,
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
