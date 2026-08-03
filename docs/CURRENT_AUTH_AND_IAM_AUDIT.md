# Current Auth and IAM Audit

## 1. Login Rejection Location
- Not found in the repository. There is no `/login` route or component present in `src/App.tsx`.

## 2. Production Demo-Account Guard
- Not found in the repository.

## 3. Hardcoded Demo Email or UID
- Checked repository for 'admin.demo@sidqly.com', 'sidqly.team@gmail.com', 'QUIyjLUr3fNDiodYnZLRGLg21om2'. None of these exist in the codebase.

## 4. Current Firebase Project Configuration
- `firebase.json` contains hosting configurations for `sidqly-15-june`.
- `.firebaserc` lists default project `sidqly-production`.

## 5. Current Role-Routing Implementation
- There is no auth routing or role-routing implemented in `src/App.tsx`.

## 6. Current Firestore User Schema
- No types or schemas defined in the repo for users.

## 7. Current Organization Membership Schema
- No types or schemas defined for organization membership.

## 8. Cloud Functions Already Exist?
- No. There is no `functions` directory.

## 9. Trusted Backend Already Exists?
- No. No backend or API code exists in the repo.

## 10. Production Accidentally Using an Emulator?
- No emulator configuration found in `firebase.ts`.

## 11. Existing Firebase Authentication Providers
- `firebase.ts` only initializes core app and analytics. No auth providers are exported or used.

## 12. Existing User and Organization Management Pages
- None exist.

## 13. Required Migrations
- Since there are no existing rules, functions, auth logic, or dashboard pages, we need to build them from scratch:
  - Add Firebase Auth to frontend.
  - Create `/login` page (blocking `admin.demo@sidqly.com`).
  - Create `/super-admin` dashboard with organization, team, user, and invite management.
  - Set up Firebase Functions (v2) for all privileged actions, checking roles via custom claims.
  - Create `firestore.rules`.
  - Create `scripts/repair-super-admin.ts` to assign correct UID, claims, and Firestore doc.
  - Test with Emulators.
