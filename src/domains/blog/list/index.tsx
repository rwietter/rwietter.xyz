import { ArticleCard } from '../posts'
import styles from './styles.module.css'

const BlogPosts = ({ articles }: any) => (
  <ul className={styles.articlesContainer}>
    {articles?.map((article: any) => (
      <ArticleCard article={article} key={article.attributes.slug} />
    ))}
  </ul>
)

export { BlogPosts }
