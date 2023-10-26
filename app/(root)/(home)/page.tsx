import { FC } from 'react';

import { PartnershipSection, RideSection } from './_components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetTaxi App | Home',
  description: 'Welcome to GetTaxi app! Take a ride or become a partner!',
};

const Home: FC = () => {
  return (
    <main className="flex-1">
      <RideSection />
      <PartnershipSection />
    </main>
  );
};

export default Home;
