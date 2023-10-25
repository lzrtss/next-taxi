import { FC } from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
}

const Logo: FC<LogoProps> = ({ className, height, width }) => {
  return (
    <Image
      src="/logo.png"
      priority
      height={height || 111}
      width={width || 200}
      alt="CarGo logo"
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;