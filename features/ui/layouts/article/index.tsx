import type { FC, ReactNode } from 'react';
import Header from 'components/Header';
import { StickyBar } from 'components/StickyBar';
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
    <StickyBar />
  </S.BlogContainerPosts>
);

export { ArticleLayout };
