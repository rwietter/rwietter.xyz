import Header from 'components/Header'
import { StickyBar } from 'components/StickyBar'
import type { FC, ReactNode } from 'react'

import * as S from './styles'

interface ArticleLayoutProps {
  children: ReactNode
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => (
  <S.BlogContainerPosts>
    <Header />
    <S.ArticleLayout className='fade-in-layout'>{children}</S.ArticleLayout>
    <StickyBar />
  </S.BlogContainerPosts>
)

export { ArticleLayout }
