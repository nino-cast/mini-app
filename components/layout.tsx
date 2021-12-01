import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
