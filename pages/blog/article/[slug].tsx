import JSONLD from 'components/JSON-LD'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import ARTICLE_QUERY from 'queries/article/article'
import apolloClient from 'utils/apollo-client'

import { NextSEO } from 'components/SEO'
import { ArticleData } from 'features/article/ts'
import { ArticleLayout } from 'features/ui/layouts'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ARTICLES_QUERY } from 'queries/articles/articles'
import { blurImage } from 'utils/blur-image'

import {
  ArticleContainer,
  ArticleImage,
  ArticleMarkdownContainer,
  ImageContainer,
  ImageCredit,
} from 'features/article/styles'
import { memo } from 'react'

const ArticleContent = dynamic(() => import('features/article/content'), {
  ssr: true,
})

const ArticleFooter = dynamic(() => import('features/article/footer'), {
  ssr: true,
})

const ArticleHeader = dynamic(() => import('features/article/header'), {
  ssr: true,
})

const ArticleItem = ({ articles, blurDataURL }: ArticleData) => {
  const router = useRouter()

  if (!articles || !articles.length) return null

  const article = articles[0]

  return (
    <>
      <NextSEO
        title={article?.attributes?.title}
        description={article?.attributes?.description}
        image={article?.attributes?.image?.data?.attributes?.url}
        author={article?.attributes?.author?.data?.attributes?.name}
        url={`https://rwietterc.xyz${router?.asPath}`}
        content='article'
      />
      <JSONLD
        description={article?.attributes?.description}
        title={article?.attributes?.title}
        image={article?.attributes?.image?.data?.attributes?.url}
        authorName={article?.attributes?.author?.data?.attributes?.name}
        datePublished={article?.attributes?.publishedAt}
        url={`https://rwietterc.xyz${router?.asPath}`}
      />
      <ArticleLayout>
        <ArticleContainer>
          <ArticleMarkdownContainer>
            <ArticleHeader article={article} />
            <ImageContainer>
              <ArticleImage>
                <Image
                  fill
                  quality={50}
                  alt={`Image of the article: ${article.attributes.title} | ${article.attributes.image.data.attributes.alternativeText}`}
                  loading='lazy'
                  fetchPriority='high'
                  rel='preload'
                  placeholder='blur'
                  style={{ objectFit: 'cover' }}
                  src={blurDataURL.src}
                  blurDataURL={blurDataURL.blurDataURL}
                />
              </ArticleImage>
              <ImageCredit>
                {article.attributes.image.data.attributes.caption}
              </ImageCredit>
            </ImageContainer>
            <ArticleContent article={article} />
          </ArticleMarkdownContainer>
          <ArticleFooter
            author={article?.attributes?.author?.data?.attributes?.name}
            name={article?.attributes?.title}
            category={article?.attributes?.category?.data?.attributes?.name}
          />
        </ArticleContainer>
      </ArticleLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: ARTICLES_QUERY })

  if (!data) return { paths: [], fallback: true }

  const paths = data?.articles?.data?.map((article: any) => ({
    params: { slug: article.attributes.slug },
  }))

  if (!paths) return { paths: [], fallback: true }

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} }

  const { data } = await apolloClient.query({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
  })

  if (!data) return { props: {} }

  return {
    props: {
      slug: params.slug,
      articles: data.articles.data,
      blurDataURL: await blurImage(
        data.articles.data[0].attributes.image.data.attributes.url,
      ),
    },
    revalidate: 300, // 5 minutes
  }
}

export default memo(ArticleItem)
