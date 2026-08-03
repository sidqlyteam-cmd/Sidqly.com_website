import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { PlatformRole } from '../types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireSuperAdmin?: boolean;
  requireRole?: PlatformRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireSuperAdmin, requireRole }) => {
  const { firebaseUser, authStatus, claims, platformRole } = useAuth();
  const location = useLocation();

  if (authStatus === 'initializing' || authStatus === 'loadingAccess') {
    return <div className="flex justify-center items-center h-screen">Loading access...</div>;
  }

  if (authStatus === 'unauthenticated' || !firebaseUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (authStatus === 'verificationRequired') {
     return <div className="flex justify-center items-center h-screen text-amber-600 font-bold text-xl">Email Verification Required</div>;
  }

  if (authStatus === 'suspended') {
     return <div className="flex justify-center items-center h-screen text-red-600 font-bold text-xl">Account Suspended</div>;
  }

  if (authStatus === 'disabled') {
     return <div className="flex justify-center items-center h-screen text-red-600 font-bold text-xl">Account Disabled</div>;
  }

  if (requireSuperAdmin && !claims?.isSuperAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (requireRole && requireRole.length > 0 && platformRole) {
    if (!requireRole.includes(platformRole)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
