/* eslint-disable no-tabs */
import { useRouter } from 'next/router';
import ARTICLE_QUERY from 'queries/article/article';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import { RiTimer2Line } from 'react-icons/ri';
import * as CSS from 'features/article/styles';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import { getReadingTime } from 'utils/getTimeReading';
import { getLocaleDate } from 'utils/get-locale-date';
import { NextSEO } from 'components/SEO';
import Link from 'next/link';
import { ArticleLayout } from 'features/ui/layouts';
import { blurImage } from 'utils/blur-image';
import { ArticleData } from 'features/article/ts';
import { ArticleFooter } from 'features/article';
import JSONLD from 'components/JSON-LD';

const ArticleItem = ({ articles, blurDataURL }: ArticleData) => {
  if (!articles) return null;

  const router = useRouter();

  const [article] = articles;
  const { readTime } = getReadingTime(article?.attributes?.content);
  const { localeDate: publishedAt } = getLocaleDate(article?.attributes?.publishedAt, 'pt-BR');

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
            <CSS.ArticleHeader>
              <div>
                <CSS.InfoHeader>
                  <Link href="/blog">
                    <CSS.BackToOverview
                      type="button"
                      aria-label="Back to overview"
                    >
                      <AiOutlineArrowLeft size={19} aria-hidden="true" />
                      <p>Back to overview</p>
                    </CSS.BackToOverview>
                  </Link>
                  <div>
                    <CSS.DateTimeRead>
                      <AiOutlineCalendar size={17} />
                      {publishedAt}
                      &nbsp;|&nbsp;
                      <RiTimer2Line size={17} />
                      {readTime}
                    </CSS.DateTimeRead>
                  </div>
                </CSS.InfoHeader>
              </div>

              <CSS.ArticleTitle>{article?.attributes?.title}</CSS.ArticleTitle>
              <CSS.ArticleDescription>
                {article?.attributes?.description}
              </CSS.ArticleDescription>
            </CSS.ArticleHeader>
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
            <CSS.Article>
              <CSS.ArticleMarkdown className={markdownLight['markdown-body']}>
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
