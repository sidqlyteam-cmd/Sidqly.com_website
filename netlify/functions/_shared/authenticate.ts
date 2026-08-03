import { adminAuth } from './firebaseAdmin';
import { ApiError } from './errors';

export const authenticate = async (authHeader?: string) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ApiError('Unauthorized: Missing or invalid token', 401);
  }
  const idToken = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken, true);
    return decodedToken;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new ApiError('Unauthorized: Token verification failed', 401);
  }
};
