import { FC, ReactNode } from 'react';
import MenuBar from 'components/menu-bar';
import Header from 'features/site/header';
import { ContainerCSS, LayoutCSS } from './styles';

interface LayoutProps {
  children: ReactNode;
  layout?: 'small' | 'medium' | 'large' | 'full';
}

const Layout: FC<LayoutProps> = ({ children, layout = 'small' }) => (
  <ContainerCSS>
    <Header />
    <LayoutCSS layout={layout}>
      {children}
    </LayoutCSS>
    <MenuBar />
  </ContainerCSS>
);

export { Layout };
