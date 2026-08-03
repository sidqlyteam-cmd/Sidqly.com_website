import { Handler } from '@netlify/functions';
import { createResponse, handleOptions } from './_shared/response';
import { authenticate } from './_shared/authenticate';
import { requireSuperAdmin } from './_shared/authorize';
import { adminDb } from './_shared/firebaseAdmin';
import { handleError, ApiError } from './_shared/errors';

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return handleOptions();
  if (event.httpMethod !== 'GET') return createResponse(405, { error: 'Method Not Allowed' });

  try {
    const decodedToken = await authenticate(event.headers.authorization);
    await requireSuperAdmin(decodedToken);

    const uid = event.queryStringParameters?.uid;
    if (!uid) throw new ApiError('Missing UID', 400);

    const userDoc = await adminDb.collection('users').doc(uid).get();
    if (!userDoc.exists) {
      throw new ApiError('User not found', 404);
    }

    // Also fetch memberships
    const membershipsSnapshot = await adminDb.collection('organizationMembers')
        .where('userId', '==', uid)
        .get();

    const memberships = membershipsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return createResponse(200, {
      user: {
        id: userDoc.id,
        ...userDoc.data()
      },
      memberships
    });
  } catch (error) {
    const { statusCode, error: errorMessage } = handleError(error);
    return createResponse(statusCode, { error: errorMessage });
  }
};
