import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';
import FadeIn from 'react-fade-in';
import { BlogContainerPosts, LayoutCSS } from './styles';

interface BlogLayoutProps {
  children: ReactNode;
}

const MenuBar = dynamic(() => import('components/menu-bar'), {
  ssr: false,
});

const Header = dynamic(() => import('features/site/header'), {
  ssr: false,
});

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => (
  <BlogContainerPosts>
    <Header />
    <LayoutCSS>
      <FadeIn>{children}</FadeIn>
    </LayoutCSS>
    <MenuBar />
  </BlogContainerPosts>
);

export { BlogLayout };
