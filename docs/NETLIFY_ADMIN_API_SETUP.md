# Netlify Functions Admin API Setup

Because the Firebase project `sidqly-prod` is currently on the **Spark (No Cost)** plan, we cannot use Firebase Cloud Functions to handle server-side secure logic.

Instead, all secure operations that require the Firebase Admin SDK (such as creating users, assigning roles, and creating organizations) are handled by **Netlify Functions** under their free tier.

## Architecture
1. **Frontend (Vite/React):** Deployed via Firebase Hosting (`sidqly-15-june`).
2. **Authentication:** Firebase Auth handles user sessions and provides JWT ID tokens.
3. **Secure API:** The frontend makes HTTP requests to `/.netlify/functions/*` attaching the Firebase ID token as a Bearer token.
4. **Validation:** Netlify Functions verify the ID token using the Firebase Admin SDK and check for the `super_admin` claim.

## Setup Instructions

### 1. Create a Netlify Project
Connect the GitHub repository to a new Netlify site. Ensure the Build command is `npm run build` and the Publish directory is `dist`.

### 2. Environment Variables
You must set the following environment variables in the Netlify dashboard under **Site configuration > Environment variables**:

- `FIREBASE_PROJECT_ID`: `sidqly-prod`
- `FIREBASE_CLIENT_EMAIL`: Service account email from GCP console.
- `FIREBASE_PRIVATE_KEY`: Service account private key (ensure `\n` characters are maintained).
- `FIREBASE_STORAGE_BUCKET`: `sidqly-prod.appspot.com`
- `ALLOWED_ORIGINS`: `https://www.sidqly.com`
- `SIDQLY_APP_URL`: `https://www.sidqly.com`
- `EMAIL_PROVIDER_API_KEY`: API Key for SendGrid / Mailgun (Optional, used for invites).
- `EMAIL_FROM_ADDRESS`: e.g. `team@sidqly.com`

**Never commit these credentials to version control.**

### 3. Usage Limits and Monitoring
Netlify Functions on the free tier provide **125,000 requests per month** and **100 hours of execution time**.
Given this API is strictly used for the `Super Admin` and administrative actions (which occur infrequently compared to standard user traffic), this limit is well within expected thresholds.

If limits are exceeded, administrative API requests will fail with a `502` or `429` error. Regular users reading from Firestore directly will remain unaffected.

### 4. Future Migration
If the Firebase project is upgraded to the **Blaze** plan, these functions can be easily migrated back into `functions/src` as Firebase Callable Functions to co-locate the backend with the database.
