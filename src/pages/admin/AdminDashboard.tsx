// src/pages/admin/AdminDashboard.tsx
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminAuthContext';

export default function AdminDashboard() {
  const { user, logout } = useAdmin();
  const nav = useNavigate();
  if (!user.id || user.role !== 'admin') {
    nav('/admin/login', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4">Signed in as {user.email}</p>
      <div className="space-x-3">
        <button
          onClick={() => nav('/admin/assign')}
          className="px-4 py-2 rounded bg-amber-500 text-white"
        >
          Assign Shifts
        </button>
        <button
          onClick={async () => {
            await logout();
            nav('/admin/login', { replace: true });
          }}
          className="px-4 py-2 rounded border"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
