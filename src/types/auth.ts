export type PlatformRole =
  | 'super_admin'
  | 'platform_admin'
  | 'operations_manager'
  | 'support_manager'
  | 'compliance_reviewer'
  | 'finance_manager'
  | 'platform_auditor';

export type AccountStatus = 'active' | 'suspended' | 'disabled' | 'incompleteProfile';

export interface UserProfile {
  uid: string;
  email: string;
  normalizedEmail: string;
  name: string;
  displayName: string;
  accountType: 'platform' | 'organization';
  role: PlatformRole;
  platformRole: PlatformRole;
  isSuperAdmin: boolean;
  status: AccountStatus;
  organizationId: string | null;
  primaryOrganizationId: string | null;
  emailVerified: boolean;
  organizations?: string[];
  updatedAt: number | object;
  updatedBy: string;
}

export interface CustomClaims {
  platformRole?: PlatformRole;
  isSuperAdmin?: boolean;
  accessVersion?: number;
}
