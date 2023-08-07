import { FC, ReactNode } from 'react';
import { StickyBar } from 'src/shared/StickyBar';
import Header from 'src/shared/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <div
      className="flex"
    >
      <Header />
      {children}
    </div>
    <StickyBar />
  </>
);

export { Layout };
