import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import SEO from 'components/SEO';

import ArticleHeader from 'src/domains/article/Header';
import ArticleImage from 'src/domains/article/Image';
import ArticleContent from 'src/domains/article/Article';
import { ArticleFooter } from 'src/domains/article/Footer';
import ARTICLE_QUERY from 'queries/article/article';

export async function generateStaticParams() {
  const { data, loading, errors } = await apolloClient.query({ query: ARTICLES_QUERY });

  if (loading) return { paths: [], fallback: true };

  if (errors) return { paths: [], fallback: true };

  return data.articles.data.map((article: any) => ({
    slug: article.attributes.slug,
  }));
}

const ArticleItem = async ({ params }: any) => {
  const { slug } = params;

  const { data, loading, errors } = await apolloClient.query({
    query: ARTICLE_QUERY,
    variables: { slug },
  });

  if (loading) return { paths: [], fallback: true };

  if (errors) return { paths: [], fallback: true };

  const article = data.articles.data[0];

  return (
    <>
      <SEO
        title={article?.attributes?.title}
        description={article?.attributes?.description}
        image={article?.attributes?.image?.data?.attributes?.url}
        author={article?.attributes?.author?.data?.attributes?.name}
        url={`https://rwietterc.xyz/blog/${article?.attributes?.slug}`}
        content="article"
      />
      <main>
        <ArticleHeader article={article} />
        <ArticleImage article={article} />
        <ArticleContent article={article} />
        <ArticleFooter article={article} />
      </main>
    </>
  );
};

export default ArticleItem;
