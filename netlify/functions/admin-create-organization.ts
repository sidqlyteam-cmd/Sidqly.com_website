import { Handler } from '@netlify/functions';
import { createResponse, handleOptions } from './_shared/response';
import { authenticate } from './_shared/authenticate';
import { requireSuperAdmin } from './_shared/authorize';
import { adminDb } from './_shared/firebaseAdmin';
import { handleError, ApiError } from './_shared/errors';
import { FieldValue } from 'firebase-admin/firestore';

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return handleOptions();
  if (event.httpMethod !== 'POST') return createResponse(405, { error: 'Method Not Allowed' });

  try {
    const decodedToken = await authenticate(event.headers.authorization);
    await requireSuperAdmin(decodedToken);

    if (!event.body) throw new ApiError('Missing request body', 400);
    const body = JSON.parse(event.body);
    const { name, country, type } = body;

    if (!name || typeof name !== 'string') {
      throw new ApiError('Invalid organization name', 400);
    }

    const orgRef = adminDb.collection('organizations').doc();
    const orgData = {
      name,
      country: country || null,
      type: type || 'charity',
      status: 'active',
      createdAt: FieldValue.serverTimestamp(),
      createdBy: decodedToken.uid
    };

    await adminDb.runTransaction(async (t) => {
      t.set(orgRef, orgData);
      t.set(adminDb.collection('auditLogs').doc(), {
        action: 'ORGANIZATION_CREATED',
        targetOrgId: orgRef.id,
        performedBy: decodedToken.uid,
        createdAt: FieldValue.serverTimestamp()
      });
    });

    return createResponse(201, { id: orgRef.id, ...orgData });
  } catch (error) {
    const { statusCode, error: errorMessage } = handleError(error);
    return createResponse(statusCode, { error: errorMessage });
  }
};
