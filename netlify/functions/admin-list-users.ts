import { Handler } from '@netlify/functions';
import { createResponse, handleOptions } from './_shared/response';
import { authenticate } from './_shared/authenticate';
import { requireSuperAdmin } from './_shared/authorize';
import { adminDb } from './_shared/firebaseAdmin';
import { handleError } from './_shared/errors';

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return handleOptions();
  if (event.httpMethod !== 'GET') return createResponse(405, { error: 'Method Not Allowed' });

  try {
    const decodedToken = await authenticate(event.headers.authorization);
    await requireSuperAdmin(decodedToken);

    const snapshot = await adminDb.collection('users').orderBy('createdAt', 'desc').get();
    const users = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        uid: data.uid,
        email: data.email,
        name: data.name,
        role: data.role,
        platformRole: data.platformRole,
        status: data.status,
        emailVerified: data.emailVerified,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || null,
        lastLoginAt: data.lastLoginAt?.toDate?.()?.toISOString() || null,
      };
    });

    return createResponse(200, { users });
  } catch (error) {
    const { statusCode, error: errorMessage } = handleError(error);
    return createResponse(statusCode, { error: errorMessage });
  }
};
