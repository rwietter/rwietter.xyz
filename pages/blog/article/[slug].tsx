/* eslint-disable no-tabs */
import { useRouter } from 'next/router';
import ARTICLE_QUERY from 'queries/article/article';
import { useThemeStore } from 'store/switch-theme';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import markdownDark from 'styles/github-markdown-css-dark.module.css';
import { Layout } from 'layouts/content';
import Link from 'next/link';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import { RiTimer2Line } from 'react-icons/ri';
import { FC, useEffect } from 'react';
import * as CSS from 'styles/blog/article/styled';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import { getReadingTime } from 'utils/getTimeReading';
import { getLocaleDate } from 'utils/get-locale-date';
import dynamic from 'next/dynamic';

const SEO = dynamic(() => import('components/SEO'), {
  ssr: false,
});

const ArticleFooter = dynamic(() => import('components/article-footer'), {
  ssr: true,
  loading: () => <p>...</p>,
});

interface ArticleItemProps {
  articles: any
}

const makeElement = (lang: string) => `<button type="button" id="code-target">${lang}<span id="code-target-tooltip">Copy code</span></button>`;

const ArticleItem: FC<ArticleItemProps> = ({ articles }) => {
  const { theme } = useThemeStore() as any;

  const router = useRouter() as unknown as { asPath: string };
  if (!articles) return null;

  const [article] = articles;
  const { readTime } = getReadingTime(article.attributes.content);
  const { localeDate: publishedAt } = getLocaleDate(article.attributes.publishedAt, 'pt-BR');

  useEffect(() => {
    const code = document.querySelectorAll('code');

    code?.forEach((item: HTMLElement) => {
      if (item.className.includes('language-')) {
        const [, lang] = item.className.split('language-');
        item.insertAdjacentHTML('beforebegin', makeElement(lang));
      }
    });
    return () => {
      const codeTarget = document.querySelectorAll('#code-target');
      codeTarget.forEach((item: any) => { item.remove(); });
    };
  }, []);

  useEffect(() => {
    const codeTarget = document.querySelectorAll('#code-target');
    let timeout: any = null;
    codeTarget.forEach((item) => {
      item.addEventListener('click', async () => {
        if (item.nextSibling) {
          const code = item.nextSibling.textContent as string;
          await navigator.clipboard.writeText(code);
          const [tooltip] = item.children;
          tooltip.textContent = 'Copied!';
          timeout = setTimeout(() => { tooltip.textContent = 'Copy code'; }, 2000);
        }
      });
      return () => {
        codeTarget.forEach((pre) => { pre.removeEventListener('click', () => { }); });
        clearTimeout(timeout);
      };
    });
  }, []);

  return (
    <Layout>
      <SEO
        title={article.attributes.title}
        description={article.attributes.description}
        image={article.attributes.image.data.attributes.url}
        author={article.attributes.author}
        url={`https://rwietter.xyz${router.asPath}`}
        content="article"
      />
      <CSS.ArticleContainer>
        <CSS.ArticleMarkdownContainer>
          <CSS.ArticleHeader>
            <Link href="/blog" rel="canonical">
              <CSS.BackToOverview>
                <AiOutlineArrowLeft size={19} />
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
            <CSS.ArticleTitle>{article.attributes.title}</CSS.ArticleTitle>
            <CSS.ArticleDescription>
              {article.attributes.description}
            </CSS.ArticleDescription>
          </CSS.ArticleHeader>
          <CSS.ArticleImage
            src={article.attributes.image.data.attributes.url}
            width={500}
            height={500}
            quality={70}
            alt={`Image of the article ${article.attributes.title}`}
            loading="lazy"
            blurDataURL="https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_1280.jpg"
            placeholder="blur"
          />
          <article>
            <CSS.ArticleMarkdown
              className={
                theme === 'light'
                  ? markdownDark['markdown-body']
                  : markdownLight['markdown-body']
              }
            >
              {article.attributes.content}
            </CSS.ArticleMarkdown>
          </article>
        </CSS.ArticleMarkdownContainer>
        <ArticleFooter
          author={article.attributes.author.data.attributes.name}
          name={article.attributes.title}
          category={article.attributes.category.data.attributes.name}
        />
      </CSS.ArticleContainer>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: ARTICLES_QUERY });

  if (!data) return { paths: [], fallback: true };

  const paths = data.articles.data.map((article: any) => ({
    params: { slug: article.attributes.slug },
  }));

  if (!paths) return { paths: [], fallback: true };

  return {
    paths,
    fallback: false,
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
    revalidate: 60,
  };
};

export default ArticleItem;
