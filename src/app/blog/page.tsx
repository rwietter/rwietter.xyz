import { Metadata } from 'next'
import { ARTICLES_QUERY } from 'queries/articles/articles'
import { makeSeo } from 'src/components/SEO/makeSeo'
import { BlogPosts } from 'src/domains/blog'
import { IArticles } from 'src/domains/blog/ts'
import apolloClient from 'utils/apollo-client'
import { blurImage } from 'utils/blur-image'
import generateRssFeed from 'utils/feed-rss'

export const revalidate = 60 // 1 minute

const getData = async () => {
  const { data } = await apolloClient.query({
    query: ARTICLES_QUERY,
  })

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

  const sortedArticles = [...articlesData].sort((a, b) => {
    const articleA: number = new Date(a.attributes.publishedAt).getTime()
    const articleB: number = new Date(b.attributes.publishedAt).getTime()
    return articleB - articleA
  })

  await generateRssFeed(sortedArticles)

  return {
    articles: sortedArticles,
  }
}

export const metadata: Metadata = makeSeo({
  title: 'Blog | Maurício Witter | Software Developer',
  description:
    'My blog, where I write about my experiences, my projects, and my life. :)',
  image:
    'https://res.cloudinary.com/ddwnioveu/image/upload/v1707422678/large_joshua_sortino_71v_Ab1_FXB_6g_unsplash_46a1453603.jpg',
  slug: '/blog',
  ogText:
    'My blog, where I write about my experiences, my projects, and my life. :)',
  abstract:
    'My blog, where I write about my experiences, my projects, and my life.',
  keywords: 'blog, experiences, projects, life',
})

const jsonLd = {
  type: 'Blog',
  authorName: 'Maurício Witter',
  url: 'https://rwietterc.xyz/blog',
  title: 'Blog | Maurício Witter | Software Developer',
  description:
    'My blog, where I write about my experiences, my projects, and my life. :)',
  image:
    'https://res.cloudinary.com/ddwnioveu/image/upload/v1707422678/large_joshua_sortino_71v_Ab1_FXB_6g_unsplash_46a1453603.jpg',
}

const Page = async () => {
  const data = await getData()
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPosts articles={data.articles} />
    </>
  )
}

export default Page
