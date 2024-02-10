import Link from 'next/link'
import { TfiPencil } from 'react-icons/tfi'
import { getLocaleDate } from 'utils/get-locale-date'
import { CardContainer, DateTimeRead, PostTitle } from './styles'

const ArticleCard = ({ article }: any) => {
  const { slug, title, publishedAt } = article.attributes

  const { localeDate } = getLocaleDate(publishedAt, 'pt-BR')

  return (
    <CardContainer>
      <DateTimeRead>
        <TfiPencil size={17} />
        {localeDate}
      </DateTimeRead>
      <Link href={`/blog/article/${slug}`} passHref suppressHydrationWarning>
        <PostTitle>{title}</PostTitle>
      </Link>
    </CardContainer>
  )
}

export { ArticleCard }
