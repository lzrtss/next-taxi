import { FC, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  className,
  children,
  dark,
  ...restProps
}) => {
  const darkStyles =
    'text-neutral-50 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-800';
  const lightStyles =
    'text-neutral-800 bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-50';

  return (
    <Link
      className={`flex justify-center items-center py-3 px-6 rounded-lg outline-none transition duration-150 font-medium 
      ${dark ? darkStyles : lightStyles}
      disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-600 ${className}`}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
