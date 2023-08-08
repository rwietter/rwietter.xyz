import type { FC } from 'react';
import SEO from 'components/SEO';
import { ContentLayout } from 'features/ui/layouts';
import type { GetStaticProps } from 'next';
import apolloClient from 'utils/apollo-client';
// import generateRssFeed from 'utils/feed-rss';
import { POSTS_QUERY } from 'queries/posts/posts';
import { PostItem, Posts } from 'domains/posts';

const Page: FC<any> = ({ posts }) => (
  <>
    <SEO
      title="Posts | Maurício Witter | Software Engineer"
      content="blog"
      url="https://rwietterc.xyz/posts"
      description="Posts about software development, programming, and other things."
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="small">
      <Posts>
        <PostItem posts={posts} />
      </Posts>
    </ContentLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading, errors } = await apolloClient.query({
    query: POSTS_QUERY,
  });

  if (loading) return { props: { posts: null } };
  if (errors) return { props: { posts: null } };

  const sortedPosts = [...data.posts.data].sort((a, b) => {
    const postA: number = new Date(a.attributes.publishedAt).getTime();
    const postB: number = new Date(b.attributes.publishedAt).getTime();
    return postB - postA;
  });

  // await generateRssFeed(sortedPosts);

  return {
    props: {
      posts: sortedPosts,
    },
    revalidate: 3600, // 1 hour
  };
};

export default Page;
