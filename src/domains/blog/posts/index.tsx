import Link from 'next/link'
import { TfiPencil } from 'react-icons/tfi'
import { getLocaleDate } from 'utils/get-locale-date'
import styles from './styles.module.css'

const ArticleCard = ({ article }: any) => {
  const { slug, title, publishedAt } = article.attributes

  const { localeDate } = getLocaleDate(publishedAt, 'pt-BR')

  return (
    <li className={styles.cardContainer}>
      <p className={styles.dateTimeRead}>
        <TfiPencil size={17} />
        {localeDate}
      </p>
      <Link href={`/blog/article/${slug}`} passHref suppressHydrationWarning>
        <p className={styles.postTitle}>{title}</p>
      </Link>
    </li>
  )
}

export { ArticleCard }
