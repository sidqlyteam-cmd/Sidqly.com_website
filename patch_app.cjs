const fs = require('fs');
let appStr = fs.readFileSync('src/App.tsx', 'utf8');

const importStr = `
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/auth/Login';
import SuperAdminLayout from './pages/super-admin/SuperAdminLayout';
import Overview from './pages/super-admin/Overview';
import TeamManagement from './pages/super-admin/TeamManagement';
`;

appStr = appStr.replace(/import { brand } from '\.\/config\/brand';/, importStr + "\nimport { brand } from './config/brand';");

const routeStr = `
        <Route path="/login" element={<Login />} />

        <Route path="/super-admin" element={
          <ProtectedRoute requireSuperAdmin={true}>
            <SuperAdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Overview />} />
          <Route path="team" element={<TeamManagement />} />
          <Route path="organizations" element={<div className="p-4">Organizations Management</div>} />
          <Route path="users" element={<div className="p-4">Users Management</div>} />
          <Route path="audit" element={<div className="p-4">Audit Logs</div>} />
        </Route>

`;

appStr = appStr.replace(/<Routes>/, '<Routes>\n' + routeStr);

appStr = appStr.replace(/<HelmetProvider>/, '<AuthProvider>\n<HelmetProvider>');
appStr = appStr.replace(/<\/HelmetProvider>/, '</HelmetProvider>\n</AuthProvider>');


fs.writeFileSync('src/App.tsx', appStr);
