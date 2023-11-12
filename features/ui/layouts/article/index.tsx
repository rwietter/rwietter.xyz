import type { FC, ReactNode } from 'react';
import Header from 'components/Header';
import { StickyBar } from 'components/StickyBar';
import * as S from './styles';
import { Inconsolata } from 'next/font/google';
 
const inconsolata = Inconsolata({
  weight: ['300', '500'],
  subsets: ['latin'],
	display: 'swap',
	preload: false,
	style: 'normal',
})
interface ArticleLayoutProps {
  children: ReactNode;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => (
  <S.BlogContainerPosts>
    <Header />
    <S.ArticleLayout className={inconsolata.className}>
      {children}
    </S.ArticleLayout>
    <StickyBar />
  </S.BlogContainerPosts>
);

export { ArticleLayout };
