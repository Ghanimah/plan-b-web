// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminAuthContext';

type Props = { children: React.ReactNode };

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useAdmin();
  // not logged in → go to admin login
  if (!user.id) return <Navigate to="/admin/login" replace />;
  // logged in but not an admin → send to home (or choose another page)
  if (user.role !== 'admin') return <Navigate to="/" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
