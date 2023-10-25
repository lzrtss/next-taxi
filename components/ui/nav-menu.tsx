import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import IMenuItem from '@/types/menu-item.interface';

interface NavMenuItemProps {
  items: IMenuItem[];
  className?: string;
}

const NavMenu: FC<NavMenuItemProps> = ({ items, className }) => {
  return (
    <ul className={`flex flex-col sm:flex-row gap-2 sm:gap-8 ${className}`}>
      {items?.map(item => (
        <li key={item.id}>
          <Link href={item.href} className="flex items-start gap-2">
            <Image src={item.icon} width={20} height={20} alt={item.name} />
            <p className="text-[16px] font-medium">{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
