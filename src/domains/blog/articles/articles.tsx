/* eslint-disable no-unsafe-optional-chaining */
import apolloClient from 'utils/apollo-client';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import { ArticleCard } from '../card';
import { ArticlesProps } from '../types';

export const revalidate = 300; // 5 minutes

const Articles = async () => {
  const { data, loading, errors } = await apolloClient.query({
    query: ARTICLES_QUERY,
  });

  if (loading) return <p>Loading...</p>;

  if (errors) return <p>Error :(</p>;

  const sortedArticles = [...data.articles.data].sort((a, b) => {
    const articleA: number = new Date(a.attributes.publishedAt).getTime();
    const articleB: number = new Date(b.attributes.publishedAt).getTime();
    return articleB - articleA;
  });

  return (
    <main className="grid gap-8 grid-cols-fluid">
      {sortedArticles?.map((article: ArticlesProps) => (
        <ArticleCard article={article} key={article.attributes.slug} />
      ))}
    </main>
  );
};

export { Articles };
