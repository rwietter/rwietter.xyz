import { Metadata } from 'next'
import Image from 'next/image'
import ARTICLE_QUERY from 'queries/article/article'
import { ARTICLES_QUERY } from 'queries/articles/articles'
import { NextSEO } from 'src/components/SEO'
import { makeSeo } from 'src/components/SEO/makeSeo'
import ArticleContent from 'src/domains/article/content'
import ArticleFooter from 'src/domains/article/footer'
import ArticleHeader from 'src/domains/article/header'
import styles from 'src/domains/article/styles.module.css'
import apolloClient from 'utils/apollo-client'
import { blurImage } from 'utils/blur-image'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const { data } = await getData(slug)
  const article = data.articles[0]

  const seo = makeSeo({
    title: article.attributes.title.trim(),
    description: article.attributes.description,
    image: article.attributes.image.data.attributes.url,
    ogText: article.attributes.description,
    keywords: 'article, blog, rwietter, web development, programming, tech',
    author: article.attributes.author.data.attributes.name,
    slug: `/blog/article/${slug}`,
  })

  return seo
}

export const revalidate = 60

export async function generateStaticParams() {
  const { data } = await apolloClient.query({ query: ARTICLES_QUERY })

  return data?.articles?.data?.map(
    (post: { attributes: { slug: string } }) => ({
      slug: post.attributes.slug,
    }),
  )
}

const getData = async (slug: string) => {
  const { data } = await apolloClient.query({
    query: ARTICLE_QUERY,
    variables: { slug: slug },
  })

  return {
    data: {
      slug: slug,
      articles: data.articles.data,
      blurDataURL: await blurImage(
        data.articles.data[0].attributes.image.data.attributes.url,
      ),
    },
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  // const pathname = usePathname()
  const { slug } = params
  const { data } = await getData(slug)

  const article = data.articles[0]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id:': 'https://rwietterc.xyz',
    },
    headline: article?.attributes?.title,
    image: article?.attributes?.image?.data?.attributes?.url,
    datePublished: article?.attributes?.publishedAt,
    dateModified: article?.attributes?.updatedAt,
  }

  return (
    <>
      {/* <Highlights /> */}
      <NextSEO
        title={article?.attributes?.title}
        description={article?.attributes?.description}
        image={article?.attributes?.image?.data?.attributes?.url}
        author={article?.attributes?.author?.data?.attributes?.name}
        url={'https://rwietterc.xyz'}
        content='article'
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.articleContainer}>
        <div className={styles.articleMarkdownContainer}>
          <ArticleHeader article={article} />
          <div className={styles.imageContainer}>
            <div className={styles.articleImage}>
              <Image
                fill
                quality={50}
                alt={`Image of the article: ${article.attributes.title} | ${article.attributes.image.data.attributes.alternativeText}`}
                loading='lazy'
                fetchPriority='high'
                rel='preload'
                placeholder='blur'
                style={{ objectFit: 'cover' }}
                src={data.blurDataURL.src}
                blurDataURL={data.blurDataURL.blurDataURL}
              />
            </div>
            <p className={styles.imageCredit}>
              {article.attributes.image.data.attributes.caption}
            </p>
          </div>
          <ArticleContent article={article} />
        </div>
        <ArticleFooter
          author={article?.attributes?.author?.data?.attributes?.name}
          name={article?.attributes?.title}
          category={article?.attributes?.category?.data?.attributes?.name}
        />
      </section>
    </>
  )
}

export default Page
