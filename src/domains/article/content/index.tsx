import { FC } from 'react'

import { Properties } from '../ts'
import { ArticleContainer, ArticleMarkdown } from './styles'

import MdRenderer from 'src/domains/article/content/md'

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
