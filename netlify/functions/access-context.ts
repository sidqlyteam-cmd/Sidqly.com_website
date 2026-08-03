import { Handler } from '@netlify/functions';
import { createResponse, handleOptions } from './_shared/response';
import { authenticate } from './_shared/authenticate';
import { adminDb, adminAuth } from './_shared/firebaseAdmin';
import { handleError } from './_shared/errors';

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return handleOptions();

  try {
    const decodedToken = await authenticate(event.headers.authorization);
    const { uid, email, email_verified } = decodedToken;

    // Check if Firebase Auth account is disabled
    const authUser = await adminAuth.getUser(uid);
    if (authUser.disabled) {
       return createResponse(403, { error: 'Account disabled in Firebase Auth.' });
    }

    const userRef = adminDb.collection('users').doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return createResponse(200, {
        user: { uid, email, emailVerified: email_verified, status: 'incomplete' },
        defaultRoute: '/setup-incomplete'
      });
    }

    const userData = userDoc.data();
    if (userData?.status !== 'active') {
       return createResponse(403, { error: `Account is ${userData?.status}` });
    }

    // Determine memberships
    const memberships = userData?.organizations || [];
    let defaultRoute = '/';

    const isSuperAdmin = decodedToken.isSuperAdmin === true;
    const platformRole = decodedToken.platformRole || null;

    if (isSuperAdmin) {
      defaultRoute = '/super-admin';
    } else if (platformRole) {
      defaultRoute = '/platform-dashboard';
    } else if (memberships.length > 1) {
      defaultRoute = '/organizations';
    } else if (memberships.length === 1) {
      defaultRoute = `/organization/${memberships[0]}`;
    }

    return createResponse(200, {
      user: {
        uid,
        email,
        displayName: userData?.displayName || userData?.name,
        status: userData?.status,
        emailVerified: email_verified
      },
      platformRole,
      isSuperAdmin,
      memberships,
      permissions: [],
      defaultRoute
    });

  } catch (error) {
    const { statusCode, error: errorMessage } = handleError(error);
    return createResponse(statusCode, { error: errorMessage });
  }
};
