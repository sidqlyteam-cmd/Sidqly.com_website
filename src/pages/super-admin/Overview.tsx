import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Overview: React.FC = () => {
  const { firebaseUser } = useAuth();
  const [stats, setStats] = useState({ orgs: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!firebaseUser) return;
      try {
        const token = await firebaseUser.getIdToken();
        const baseUrl = import.meta.env.VITE_API_URL || '/.netlify/functions';

        const [orgsRes, usersRes] = await Promise.all([
          fetch(`${baseUrl}/admin-list-organizations`, { headers: { Authorization: `Bearer ${token}` }}),
          fetch(`${baseUrl}/admin-list-users`, { headers: { Authorization: `Bearer ${token}` }})
        ]);

        if (orgsRes.ok && usersRes.ok) {
           const orgsData = await orgsRes.json();
           const usersData = await usersRes.json();
           setStats({
              orgs: orgsData.organizations.length,
              users: usersData.users.length
           });
        }
      } catch (err) {
        console.error("Failed to fetch overview stats", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [firebaseUser]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Platform Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h3 className="text-gray-500 font-medium">Active Organizations</h3>
          <p className="text-3xl font-bold text-sidqly-navy mt-2">{loading ? '...' : stats.orgs}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h3 className="text-gray-500 font-medium">Total Users</h3>
          <p className="text-3xl font-bold text-sidqly-navy mt-2">{loading ? '...' : stats.users}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
