import { FC } from 'react'
import MdRenderer from 'src/domains/article/content/md'
import { Properties } from '../ts'

import styles from './styles.module.css'

interface ArticleData {
  article: {
    attributes: Pick<Properties, 'content'>
  }
}

const ArticleContent: FC<ArticleData> = ({ article }) => (
  <div className={styles.articleContainer}>
    <article className={styles.articleMarkdown}>
      <MdRenderer article={article.attributes.content} />
    </article>
  </div>
)

export default ArticleContent
