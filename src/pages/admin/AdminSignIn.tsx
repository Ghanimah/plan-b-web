// src/pages/admin/AdminSignIn.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminAuthContext';

const AdminSignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const { signIn } = useAdmin();
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await signIn(email, pw); // 🔑 authenticate with AdminAuthContext
      nav('/admin/dashboard', { replace: true }); // ✅ redirect after login
    } catch (err: any) {
      alert(err?.message || 'Login failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded-xl shadow-md w-80 text-center"
      >
        <h2 className="text-xl font-bold mb-4">Admin Portal Login</h2>
        <input
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button
          type="submit"
          disabled={busy}
          className="w-full bg-amber-500 text-white py-2 rounded disabled:opacity-60"
        >
          {busy ? 'Signing in…' : 'Sign In'}
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Employees should use the mobile app, not this portal.
        </p>
      </form>
    </div>
  );
};

export default AdminSignIn;
