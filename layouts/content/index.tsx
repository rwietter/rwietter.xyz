import dynamic from 'next/dynamic';
import React, { FC as withTypes, ReactNode } from 'react';
import FadeIn from 'react-fade-in';
import { ContainerCSS, LayoutCSS } from './styles';

interface ContainerProps {
  children: ReactNode;
}

const MenuBar = dynamic(() => import('components/menu-bar'), {
  ssr: false,
});

const Header = dynamic(() => import('features/site/header'), {
  ssr: false,
});

const Layout: withTypes<ContainerProps> = ({ children }) => (
  <ContainerCSS>
    <Header />
    <LayoutCSS>
      <FadeIn>{children}</FadeIn>
    </LayoutCSS>
    <MenuBar />
  </ContainerCSS>
);

export { Layout };
