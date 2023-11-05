/* eslint-disable no-tabs */
import { useRouter } from 'next/router';
import ARTICLE_QUERY from 'queries/article/article';
import * as CSS from 'features/article/styles';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import { NextSEO } from 'components/SEO';
import { ArticleLayout } from 'features/ui/layouts';
import { blurImage } from 'utils/blur-image';
import { ArticleData } from 'features/article/ts';
import { ArticleFooter } from 'features/article';
import JSONLD from 'components/JSON-LD';
import dynamic from 'next/dynamic';

const ArticleHeader = dynamic(() => import('features/article/header'), { ssr: true });
const Markdown = dynamic(() => import('features/article/markdown'), { ssr: true });

const ArticleItem = ({ articles, blurDataURL }: ArticleData) => {
  if (!articles) return null;

  const router = useRouter();

  const [article] = articles;

  return (
    <>
      <NextSEO
        title={article?.attributes?.title}
        description={article?.attributes?.description}
        image={article?.attributes?.image?.data?.attributes?.url}
        author={article?.attributes?.author?.data?.attributes?.name}
        url={`https://rwietterc.xyz${router?.asPath}`}
        content="article"
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
        <CSS.ArticleContainer>
          <CSS.ArticleMarkdownContainer>
            <ArticleHeader article={article} />
            <CSS.ImageContainer>
              <CSS.ArticleImage
                width={5000}
                height={5000}
                quality={100}
                alt={`Image of the article: ${article.attributes.title} | ${article.attributes.image.data.attributes.alternativeText}`}
                loading="lazy"
                placeholder="blur"
                {...blurDataURL}
              />
              <CSS.ImageCredit>
                {article.attributes.image.data.attributes.caption}
              </CSS.ImageCredit>
            </CSS.ImageContainer>
            <Markdown article={article} />
          </CSS.ArticleMarkdownContainer>
          <ArticleFooter
            author={article?.attributes?.author?.data?.attributes?.name}
            name={article?.attributes?.title}
            category={article?.attributes?.category?.data?.attributes?.name}
          />
        </CSS.ArticleContainer>
      </ArticleLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: ARTICLES_QUERY });

  if (!data) return { paths: [], fallback: true };

  const paths = data?.articles?.data?.map((article: any) => ({
    params: { slug: article.attributes.slug },
  }));

  if (!paths) return { paths: [], fallback: true };

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };

  const { data } = await apolloClient.query(
    { query: ARTICLE_QUERY, variables: { slug: params.slug } },
  );

  if (!data) return { props: {} };

  return {
    props: {
      slug: params.slug,
      articles: data.articles.data,
      blurDataURL: await blurImage(data.articles.data[0].attributes.image.data.attributes.url),
    },
    revalidate: 300, // 5 minutes
  };
};

export default ArticleItem;
