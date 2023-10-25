import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import IMenuItem from '@/types/menu-item.interface';

interface SocialMenuItemProps {
  items: IMenuItem[];
  className?: string;
}

const SocialMenu: FC<SocialMenuItemProps> = ({ items, className }) => {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {items?.map(item => (
        <li key={item.id}>
          <Link href={item.href} target="blank">
            <Image src={item.icon} width={20} height={20} alt={item.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMenu;
