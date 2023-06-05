import { FC, ReactNode } from 'react';
import Header from 'components/Header';
import { StickyBar } from 'components/StickyBar';
import { LayoutCSS } from './styles';

interface LayoutProps {
  children: ReactNode;
  layout?: 'small' | 'medium' | 'large' | 'full';
}

const Layout: FC<LayoutProps> = ({ children, layout = 'small' }) => (
  <>
    <LayoutCSS layout={layout}>
      <Header />
      {children}
    </LayoutCSS>
    <StickyBar />
  </>
);

export { Layout };
