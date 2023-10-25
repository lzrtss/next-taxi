import { FC } from 'react';
import type { Metadata } from 'next';

import { AuthProvider } from '@/providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Sign in to GetTaxi',
  description: 'The most convenient taxi booking app ever',
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center items-center">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
