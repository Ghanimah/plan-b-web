import { Navigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminAuthContext';

export default function RequireAdmin({ children }: { children: JSX.Element }) {
  const { user } = useAdmin();
  if (!user.id) return <Navigate to="/admin/login" replace />;
  if (user.role !== 'admin') return <Navigate to="/" replace />;
  return children;
}
