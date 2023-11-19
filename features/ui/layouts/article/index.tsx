import type { FC, ReactNode } from 'react';
import Header from 'components/Header';
import { StickyBar } from 'components/StickyBar';
import { Fira_Sans as FiraSans } from 'next/font/google';
import * as S from './styles';

const firasans = FiraSans({
  weight: ['300', '400', '500', '800'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  style: 'normal',
  variable: '--font-fira-sans',
});
interface ArticleLayoutProps {
  children: ReactNode;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => (
  <S.BlogContainerPosts>
    <Header />
    <S.ArticleLayout className={firasans.className}>
      {children}
    </S.ArticleLayout>
    <StickyBar />
  </S.BlogContainerPosts>
);

export { ArticleLayout };
