import { Sidebar } from 'features/site/sidebar';
import { MenuBar } from 'components/menu-bar';
import React, { FC as withTypes, ReactNode } from 'react';
import FadeIn from 'react-fade-in';
import { ContainerCSS, LayoutCSS } from './styles';

interface ContainerProps {
  children: ReactNode;
 }

const Layout: withTypes<ContainerProps> = ({ children }) => (
  <ContainerCSS>
    <Sidebar />
    <LayoutCSS>
      <FadeIn>{children}</FadeIn>
    </LayoutCSS>
    <MenuBar />
  </ContainerCSS>
);

export { Layout };
