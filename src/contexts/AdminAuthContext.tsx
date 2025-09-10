import React, { createContext, useContext, useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase'; // adjust path to your firebase.ts

type AdminUser = {
  id: string;
  email: string;
  role: 'admin' | 'employee' | '';
};

type AdminContextType = {
  user: AdminUser;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser>({ id: '', email: '', role: '' });

  const signIn = async (email: string, password: string) => {
    const { user: fbUser } = await signInWithEmailAndPassword(auth, email, password);
    const snap = await getDoc(doc(db, 'users', fbUser.uid));
    if (!snap.exists() || snap.data().role !== 'admin') {
      await signOut(auth);
      throw new Error('Access denied: admin only');
    }
    setUser({ id: fbUser.uid, email: fbUser.email || '', role: 'admin' });
  };

  const logout = async () => {
    await signOut(auth);
    setUser({ id: '', email: '', role: '' });
  };

  return (
    <AdminContext.Provider value={{ user, signIn, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
