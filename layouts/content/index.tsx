import dynamic from 'next/dynamic';
import React, { FC, ReactNode } from 'react';
import FadeIn from 'react-fade-in';
import { ContainerCSS, LayoutCSS } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const MenuBar = dynamic(() => import('components/menu-bar'), {
  ssr: false,
});

const Header = dynamic(() => import('features/site/header'), {
  ssr: false,
});

const Layout: FC<LayoutProps> = ({ children }) => (
  <ContainerCSS>
    <Header />
    <LayoutCSS>
      <FadeIn delay={200}>{children}</FadeIn>
    </LayoutCSS>
    <MenuBar />
  </ContainerCSS>
);

export { Layout };
