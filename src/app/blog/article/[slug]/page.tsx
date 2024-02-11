import Image from 'next/image'
import ARTICLE_QUERY from 'queries/article/article'
import { ARTICLES_QUERY } from 'queries/articles/articles'
import JSONLD from 'src/components/JSON-LD'
import { NextSEO } from 'src/components/SEO'
import ArticleContent from 'src/domains/article/content'
import ArticleFooter from 'src/domains/article/footer'
import ArticleHeader from 'src/domains/article/header'
import styles from 'src/domains/article/styles.module.css'
import apolloClient from 'utils/apollo-client'
import { blurImage } from 'utils/blur-image'

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
      <JSONLD
        description={article?.attributes?.description}
        title={article?.attributes?.title}
        image={article?.attributes?.image?.data?.attributes?.url}
        authorName={article?.attributes?.author?.data?.attributes?.name}
        datePublished={article?.attributes?.publishedAt}
        url={'https://rwietterc.xyz'}
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
