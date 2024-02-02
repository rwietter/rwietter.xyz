import dynamic from 'next/dynamic'
import { FC } from 'react'

import { Properties } from '../ts'
import { ArticleContainer, ArticleMarkdown } from './styles'

const MdRenderer = dynamic(() => import('features/article/content/md'), {
  ssr: true,
})

interface ArticleData {
  article: {
    attributes: Pick<Properties, 'content'>
  }
}

const ArticleContent: FC<ArticleData> = ({ article }) => (
  <ArticleContainer>
    <ArticleMarkdown>
      <MdRenderer article={article.attributes.content} />
    </ArticleMarkdown>
  </ArticleContainer>
)

export default ArticleContent
