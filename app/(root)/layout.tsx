import { FC } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AuthProvider } from '@/providers';
import '@/styles/globals.css';
import { Footer, Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GetTaxi App',
  description: 'The most convenient taxi booking app ever',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col justify-between`}
      >
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
