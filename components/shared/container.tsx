'use client';

import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={`max-w-7xl h-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
