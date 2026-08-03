import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { onIdTokenChanged, getIdTokenResult } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import type { UserProfile, CustomClaims, PlatformRole } from '../types/auth';

export type AuthStatus =
  | 'initializing'
  | 'unauthenticated'
  | 'authenticating'
  | 'loadingAccess'
  | 'verificationRequired'
  | 'active'
  | 'suspended'
  | 'disabled'
  | 'incompleteProfile'
  | 'noMembership'
  | 'permissionDenied'
  | 'error';

interface AuthContextType {
  firebaseUser: User | null;
  profile: UserProfile | null;
  claims: CustomClaims | null;
  platformRole: PlatformRole | null;
  memberships: string[];
  selectedOrganization: string | null;
  permissions: string[];
  authStatus: AuthStatus;
  accessError: string | null;
  refreshAccess: () => Promise<void>;
  selectOrganization: (orgId: string) => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  firebaseUser: null,
  profile: null,
  claims: null,
  platformRole: null,
  memberships: [],
  selectedOrganization: null,
  permissions: [],
  authStatus: 'initializing',
  accessError: null,
  refreshAccess: async () => {},
  selectOrganization: () => {},
  signOut: async () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [claims, setClaims] = useState<CustomClaims | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('initializing');
  const [accessError, setAccessError] = useState<string | null>(null);

  const fetchAccessData = async (user: User) => {
    setAuthStatus('loadingAccess');
    setAccessError(null);
    try {
      const tokenResult = await getIdTokenResult(user, true);
      const userClaims: CustomClaims = {
        isSuperAdmin: !!tokenResult.claims.isSuperAdmin,
        platformRole: tokenResult.claims.platformRole as PlatformRole,
      };
      setClaims(userClaims);

      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (userDoc.exists()) {
        const p = userDoc.data() as UserProfile;
        setProfile(p);

        if (p.status === 'suspended') {
          setAuthStatus('suspended');
        } else if (p.status === 'disabled') {
          setAuthStatus('disabled');
        } else if (!user.emailVerified) {
          setAuthStatus('verificationRequired');
        } else {
          setAuthStatus('active');
        }
      } else {
        setProfile(null);
        setAuthStatus('incompleteProfile');
      }
    } catch (error: unknown) {
      console.error("Error fetching access data:", error);
      setAccessError((error as Error).message);
      setAuthStatus('error');
    }
  };

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        setFirebaseUser(user);
        await fetchAccessData(user);
      } else {
        setFirebaseUser(null);
        setProfile(null);
        setClaims(null);
        setAuthStatus('unauthenticated');
      }
    });

    return unsubscribe;
  }, []);

  const refreshAccess = async () => {
    if (firebaseUser) {
      await fetchAccessData(firebaseUser);
    }
  };

  const selectOrganization = (orgId: string) => {
    console.log("Selected org", orgId);
  };

  const signOutUser = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{
      firebaseUser,
      profile,
      claims,
      platformRole: claims?.platformRole || null,
      memberships: profile?.organizations || [],
      selectedOrganization: profile?.primaryOrganizationId || null,
      permissions: [],
      authStatus,
      accessError,
      refreshAccess,
      selectOrganization,
      signOut: signOutUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
