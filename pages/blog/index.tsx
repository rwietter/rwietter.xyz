import type { FC } from 'react';
import SEO from 'components/SEO';
import { Layout } from 'layouts/content';
import { Articles } from 'components/articles';
import type { GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import { blurImage } from 'utils/blur-image';

const Blog: FC<any> = ({ articles }) => (
  <>
    <SEO
      title="Blog | Maurício Witter | Software Engineer"
      content="blog"
      url="https://rwietter.xyz/blog"
      description="My blog, where I write about my experiences, my projects, and my life. :)"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <Layout>
      <Articles articles={articles} />
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading, errors } = await apolloClient.query({
    query: ARTICLES_QUERY,
  });

  if (loading) return { props: { articles: null } };
  if (errors) return { props: { articles: null } };

  const articles = data.articles.data.map(async (article: any) => {
    const image = await blurImage(article?.attributes?.image?.data?.attributes?.url);

    return {
      ...article,
      attributes: {
        ...article.attributes,
      },
      blurDataURL: image,
    };
  });

  return {
    props: {
      articles: await Promise.all(articles),
    },
    revalidate: 60,
  };
};

export default Blog;
