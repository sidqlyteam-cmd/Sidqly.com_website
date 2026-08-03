import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../firebase';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert, Users, Building, FileText, Settings, LogOut } from 'lucide-react';

const SuperAdminLayout: React.FC = () => {
  const { profile, claims } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Helmet>
        <title>Super Admin Dashboard | Sidqly</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Sidebar */}
      <aside className="w-64 bg-sidqly-navy text-white flex flex-col">
        <div className="p-4 bg-sidqly-green-deep border-b border-gray-700 flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 text-yellow-400" />
          <span className="font-bold text-lg">Super Admin</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link to="/super-admin" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
            <Settings className="h-5 w-5" />
            Overview
          </Link>
          <Link to="/super-admin/organizations" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
            <Building className="h-5 w-5" />
            Organizations
          </Link>
          <Link to="/super-admin/team" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
            <Users className="h-5 w-5" />
            Sidqly Team
          </Link>
          <Link to="/super-admin/users" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
            <Users className="h-5 w-5" />
            Org Users
          </Link>
          <Link to="/super-admin/audit" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
            <FileText className="h-5 w-5" />
            Audit Logs
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="text-sm mb-2 text-gray-300">
            {profile?.email} <br/>
            <span className="text-xs bg-sidqly-green-deep px-1 rounded">{claims?.platformRole}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full p-2 bg-red-600 hover:bg-red-700 rounded transition text-sm font-medium"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SuperAdminLayout;
