import Link from 'next/link';
import { ReactNode } from 'react';

const MenuLink = ({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Link href={href}>
      <a className={className} {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default MenuLink;
