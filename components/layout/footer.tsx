import { FC } from 'react';

import { Container, Logo, SocialMenu } from '@/components';
import { socialMenuItems } from '@/constants';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="border-t-[1px] border-neutral-200">
      <Container className="flex justify-between items-center gap-2 sm:gap-0">
        <Logo height={33} width={60} />
        <p className="text-center text-sm text-neutral-500">
          All rights reserved. &copy; {new Date().getFullYear()}{' '}
          <Link href="/" className="hover:underline underline-offset-2">
            GetTaxi
          </Link>
          .
        </p>
        <SocialMenu items={socialMenuItems} />
      </Container>
    </footer>
  );
};

export default Footer;
