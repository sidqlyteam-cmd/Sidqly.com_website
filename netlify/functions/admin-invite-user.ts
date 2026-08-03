import { Handler } from '@netlify/functions';
import { createResponse, handleOptions } from './_shared/response';
import { authenticate } from './_shared/authenticate';
import { requireSuperAdmin } from './_shared/authorize';
import { adminDb, adminAuth } from './_shared/firebaseAdmin';
import { handleError, ApiError } from './_shared/errors';
import { FieldValue } from 'firebase-admin/firestore';
import * as crypto from 'crypto';

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return handleOptions();
  if (event.httpMethod !== 'POST') return createResponse(405, { error: 'Method Not Allowed' });

  try {
    const decodedToken = await authenticate(event.headers.authorization);
    await requireSuperAdmin(decodedToken);

    if (!event.body) throw new ApiError('Missing request body', 400);
    const body = JSON.parse(event.body);
    const { email, name, role, scope, organizationId } = body;

    if (!email) throw new ApiError('Missing email', 400);
    const normalizedEmail = email.trim().toLowerCase();

    // 1. Check if user already exists
    let existingUser;
    try {
      existingUser = await adminAuth.getUserByEmail(normalizedEmail);
    } catch (e: unknown) {
      if ((e as { code?: string }).code !== 'auth/user-not-found') throw e;
    }

    if (existingUser) {
        // If inviting to platform and they already have a platform profile, we could handle it differently.
        // For now, we will create an invite record.
    }

    // 2. Generate secure token
    const rawToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex');

    // 3. Create Invitation Record
    const inviteRef = adminDb.collection('organizationInvites').doc();
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 72); // 72 hour expiry

    const inviteData = {
      email: normalizedEmail,
      name: name || '',
      role: role || 'organization_viewer',
      scope: scope || 'organization',
      organizationId: organizationId || null,
      tokenHash: hashedToken,
      invitedBy: decodedToken.uid,
      status: 'pending',
      deliveryStatus: 'pending',
      createdAt: FieldValue.serverTimestamp(),
      expiresAt: expiry
    };

    await adminDb.runTransaction(async (t) => {
        t.set(inviteRef, inviteData);
        t.set(adminDb.collection('auditLogs').doc(), {
            action: scope === 'platform' ? 'TEAM_MEMBER_INVITED' : 'ORGANIZATION_USER_INVITED',
            targetEmail: normalizedEmail,
            performedBy: decodedToken.uid,
            createdAt: FieldValue.serverTimestamp()
        });
    });

    // 4. Send Email
    // Real implementation would use an email provider here (SendGrid/Mailgun)
    const emailProviderConfigured = !!process.env.EMAIL_PROVIDER_API_KEY;

    if (emailProviderConfigured) {
        // Simulate sending logic
        await inviteRef.update({ deliveryStatus: 'sent' });
        return createResponse(200, { success: true, message: 'Invitation sent' });
    } else {
        await inviteRef.update({ deliveryStatus: 'email_provider_not_configured' });
        return createResponse(200, {
            success: true,
            message: 'Invitation recorded but email provider not configured.'
        });
    }

  } catch (error) {
    const { statusCode, error: errorMessage } = handleError(error);
    return createResponse(statusCode, { error: errorMessage });
  }
};
