/* eslint-disable no-tabs */
import { useRouter } from 'next/router';
import ARTICLE_QUERY from 'queries/article/article';
import { useThemeStore } from 'store/switch-theme';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import markdownDark from 'styles/github-markdown-css-dark.module.css';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import { RiTimer2Line } from 'react-icons/ri';
import * as CSS from 'components/article/styled';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import { getReadingTime } from 'utils/getTimeReading';
import { getLocaleDate } from 'utils/get-locale-date';
import SEO from 'components/SEO';
import Link from 'next/link';
import ArticleFooter from 'components/article-footer';
import type { ArticleTS } from 'components/article/types';
import { useState } from 'react';
import { ArticleLayout } from 'layouts/article';

const ArticleItem = ({ articles }: ArticleTS) => {
  if (!articles) return null;

  const { theme } = useThemeStore() as any;
  const [loadingImage, setLoadingImage] = useState(true);

  const router = useRouter() as unknown as { asPath: string };

  const [article] = articles;
  const { readTime } = getReadingTime(article?.attributes?.content);
  const { localeDate: publishedAt } = getLocaleDate(article?.attributes?.publishedAt, 'pt-BR');

  return (
    <ArticleLayout>
      <SEO
        title={article?.attributes?.title}
        description={article?.attributes?.description}
        image={article?.attributes?.image?.data?.attributes?.url}
        author={article?.attributes?.author?.data?.attributes?.name}
        url={`https://rwietter.xyz${router.asPath}`}
        content="article"
      />
      <CSS.ArticleContainer>
        <CSS.ArticleMarkdownContainer>
          <CSS.ArticleHeader>
            <Link href="/blog">
              <CSS.BackToOverview type="button" aria-label="Back to overview">
                <AiOutlineArrowLeft size={19} aria-hidden="true" />
                <p>Back to overview</p>
              </CSS.BackToOverview>
            </Link>
            <CSS.DateTimeRead>
              <AiOutlineCalendar size={17} />
              {publishedAt}
              &nbsp;|&nbsp;
              <RiTimer2Line size={17} />
              {readTime}
            </CSS.DateTimeRead>
            <CSS.ArticleTitle>{article?.attributes?.title}</CSS.ArticleTitle>
            <CSS.ArticleDescription>
              {article?.attributes?.description}
            </CSS.ArticleDescription>
          </CSS.ArticleHeader>
          <CSS.ImageContainer>
            <CSS.ArticleImage
              src={article.attributes.image.data.attributes.url}
              width={5000}
              height={5000}
              quality={100}
              alt={`Image of the article: ${article.attributes.title} | ${article.attributes.image.data.attributes.alternativeText}`}
              loading="lazy"
              blurDataURL={article.attributes.image.data.attributes.url}
              placeholder="blur"
              bluring={loadingImage}
              onLoadingComplete={() => setLoadingImage(false)}
            />
            <CSS.ImageCredit>{article.attributes.image.data.attributes.caption}</CSS.ImageCredit>
          </CSS.ImageContainer>
          <CSS.Article>
            <CSS.ArticleMarkdown
              className={
                theme === 'light'
                  ? markdownDark['markdown-body']
                  : markdownLight['markdown-body']
              }
            >
              {article?.attributes?.content}
            </CSS.ArticleMarkdown>
          </CSS.Article>
        </CSS.ArticleMarkdownContainer>
        <ArticleFooter
          author={article?.attributes?.author?.data?.attributes?.name}
          name={article?.attributes?.title}
          category={article?.attributes?.category?.data?.attributes?.name}
        />
      </CSS.ArticleContainer>
    </ArticleLayout>
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
    },
    revalidate: 3600,
  };
};

export default ArticleItem;
