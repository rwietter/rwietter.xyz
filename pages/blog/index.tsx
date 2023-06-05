import type { FC } from 'react';
import SEO from 'components/SEO';
import { ContentLayout } from 'features/ui/layouts';
import type { GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import { blurImage } from 'utils/blur-image';
import { BlogPosts } from 'features/blog';
import { IArticles } from 'features/blog/ts';

const Blog: FC<any> = ({ articles }) => (
  <>
    <SEO
      title="Blog | Maurício Witter | Software Engineer"
      content="blog"
      url="https://rwietterc.xyz/blog"
      description="My blog, where I write about my experiences, my projects, and my life. :)"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="medium">
      <BlogPosts articles={articles} />
    </ContentLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading, errors } = await apolloClient.query({
    query: ARTICLES_QUERY,
  });

  if (loading) return { props: { articles: null } };
  if (errors) return { props: { articles: null } };

  const articles: IArticles[] = data.articles.data.map(async (article: any) => {
    const image = await blurImage(article?.attributes?.image?.data?.attributes?.url);

    return {
      ...article,
      attributes: {
        ...article.attributes,
      },
      blurDataURL: image,
    };
  });

  const articlesData: IArticles[] = await Promise.all(articles);

  const reorderArticles = articlesData.sort((a, b) => {
    const articleA: number = new Date(a.attributes.publishedAt).getTime();
    const articleB: number = new Date(b.attributes.publishedAt).getTime();
    return articleB - articleA;
  });

  return {
    props: {
      articles: reorderArticles,
    },
    revalidate: 60,
  };
};

export default Blog;
