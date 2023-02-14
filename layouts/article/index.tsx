import type { FC, ReactNode } from 'react';
import MenuBar from 'components/menu-bar';
import Header from 'features/site/header';
import * as S from './styles';

interface ArticleLayoutProps {
  children: ReactNode;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => (
  <S.BlogContainerPosts>
    <Header />
    <S.ArticleLayout>
      {children}
    </S.ArticleLayout>
    <MenuBar />
  </S.BlogContainerPosts>
);

export { ArticleLayout };
