import { NextSEO } from 'components/SEO'
import { BlogPosts } from 'features/blog'
import { IArticles } from 'features/blog/ts'
import { ContentLayout } from 'features/ui/layouts'
import { AnimatePresence } from 'framer-motion'
import type { GetStaticProps } from 'next'
import { ARTICLES_QUERY } from 'queries/articles/articles'
import type { FC } from 'react'
import apolloClient from 'utils/apollo-client'
import { blurImage } from 'utils/blur-image'
import generateRssFeed from 'utils/feed-rss'

const Blog: FC = ({ articles }: any) => (
  <>
    <NextSEO
      title='Blog | Maurício Witter | Software Developer'
      content='blog'
      url='https://rwietterc.xyz/blog'
      description='My blog, where I write about my experiences, my projects, and my life. :)'
      image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
    />
    <ContentLayout layout='small'>
      <AnimatePresence mode='wait'>
        <BlogPosts articles={articles} />
      </AnimatePresence>
    </ContentLayout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading, errors } = await apolloClient.query({
    query: ARTICLES_QUERY,
  })

  if (loading) return { props: { articles: null } }
  if (errors) return { props: { articles: null } }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const articles: IArticles[] = data.articles.data.map(async (article: any) => {
    const image = await blurImage(
      article?.attributes?.image?.data?.attributes?.url,
    )

    return {
      ...article,
      attributes: {
        ...article.attributes,
      },
      blurDataURL: image,
    }
  })

  const articlesData: IArticles[] = await Promise.all(articles)

  const reorderArticles = [...articlesData].sort((a, b) => {
    const articleA: number = new Date(a.attributes.publishedAt).getTime()
    const articleB: number = new Date(b.attributes.publishedAt).getTime()
    return articleB - articleA
  })

  await generateRssFeed(reorderArticles)

  return {
    props: {
      articles: reorderArticles,
    },
    revalidate: 300, // 5 minutes
  }
}

export default Blog
