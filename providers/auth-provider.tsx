import { FC } from 'react';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: 'bottom',
          logoImageUrl: '/logo.png',
        },
      }}
    >
      <ClerkLoading>
        <p className="text-center">Loading...</p>
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default AuthProvider;
