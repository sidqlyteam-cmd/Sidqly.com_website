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

    // Basic pagination could go here using query parameters
    const snapshot = await adminDb.collection('auditLogs')
      .orderBy('createdAt', 'desc')
      .limit(50)
      .get();

    const logs = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || null
      };
    });

    return createResponse(200, { logs });
  } catch (error) {
    const { statusCode, error: errorMessage } = handleError(error);
    return createResponse(statusCode, { error: errorMessage });
  }
};
