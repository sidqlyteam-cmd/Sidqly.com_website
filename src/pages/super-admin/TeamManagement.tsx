import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface UserData {
  uid: string;
  email: string;
  platformRole: string;
  status: string;
}

const TeamManagement: React.FC = () => {
  const { firebaseUser } = useAuth();
  const [team, setTeam] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeam = async () => {
      if (!firebaseUser) return;
      try {
        const token = await firebaseUser.getIdToken();
        const baseUrl = import.meta.env.VITE_API_URL || '/.netlify/functions';
        const res = await fetch(`${baseUrl}/admin-list-users`, {
           headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Failed to fetch team');
        const data = await res.json();
        const platformUsers = data.users.filter((u: UserData) => u.platformRole);
        setTeam(platformUsers);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, [firebaseUser]);

  if (loading) return <div>Loading team members...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sidqly Team Management</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {team.map(member => (
              <tr key={member.uid}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.platformRole}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <span className={member.status === 'active' ? 'text-green-600' : 'text-red-600'}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-sidqly-green-deep hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamManagement;
