import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';
import FadeIn from 'react-fade-in';
import * as S from './styles';

interface ArticleLayoutProps {
  children: ReactNode;
}

const MenuBar = dynamic(() => import('components/menu-bar'), {
  ssr: false,
});

const Header = dynamic(() => import('features/site/header'), {
  ssr: false,
});

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => (
  <S.BlogContainerPosts>
    <Header />
    <S.ArticleLayout>
      <FadeIn>{children}</FadeIn>
    </S.ArticleLayout>
    <MenuBar />
  </S.BlogContainerPosts>
);

export { ArticleLayout };
