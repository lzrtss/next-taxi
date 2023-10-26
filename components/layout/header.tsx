import { FC } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

import { Container, Logo, NavMenu } from '@/components';
import { navMenuItems } from '@/constants';

const Header: FC = () => {
  return (
    <header className="border-b-[1px] bg-neutral-50 border-neutral-200 text-neutral-800">
      <Container className="flex flex-row justify-between items-center gap-3 sm:gap-0 ">
        <Link href="/" className="">
          <Logo height={44} width={80} />
        </Link>
        <NavMenu items={navMenuItems} />
        <UserButton afterSignOutUrl="/" />
      </Container>
    </header>
  );
};

export default Header;
