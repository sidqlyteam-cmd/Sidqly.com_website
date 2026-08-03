import { ApiError } from './errors';
import { adminDb } from './firebaseAdmin';
import { DecodedIdToken } from 'firebase-admin/auth';

export const requireSuperAdmin = async (decodedToken: DecodedIdToken) => {
  if (!decodedToken.isSuperAdmin || decodedToken.platformRole !== 'super_admin') {
    throw new ApiError('Forbidden: Requires Super Admin privileges', 403);
  }

  // Also verify they are active in Firestore
  const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();
  if (!userDoc.exists || userDoc.data()?.status !== 'active') {
      throw new ApiError('Forbidden: Account is not active', 403);
  }

  return userDoc.data();
};
