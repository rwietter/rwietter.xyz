import { FC, ReactNode } from 'react';
import MenuBar from 'components/menu-bar';
import Header from 'features/site/header';
import { ContainerCSS, LayoutCSS } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <ContainerCSS>
    <Header />
    <LayoutCSS>
      {children}
    </LayoutCSS>
    <MenuBar />
  </ContainerCSS>
);

export { Layout };
