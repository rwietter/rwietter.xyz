import type { FC } from 'react';
import SEO from 'components/SEO';
import { ContentLayout } from 'features/ui/layouts';
import type { GetStaticProps } from 'next';
import apolloClient from 'utils/apollo-client';
// import generateRssFeed from 'utils/feed-rss';
import { POSTS_QUERY } from 'queries/posts/posts';
import * as S from 'domains/posts/post-list/styles';

const Posts: FC<any> = ({ posts }) => (
  <>
    <SEO
      title="Blog | Maurício Witter | Software Engineer"
      content="blog"
      url="https://rwietterc.xyz/blog"
      description="My blog, where I write about my experiences, my projects, and my life. :)"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="small">
      <S.PostsContainer>
        <S.PostListTitle>Writings</S.PostListTitle>
        <S.PostList>
          {posts?.map((post: any) => (
            <S.PostListItem href={`/post/${post.attributes?.slug}`} key={post.attributes.slug}>
              {new Date(post.attributes?.publishedAt).toLocaleDateString()}
              { ' ' }
              {post.attributes?.title}
            </S.PostListItem>
          ))}
        </S.PostList>
      </S.PostsContainer>
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

export default Posts;
