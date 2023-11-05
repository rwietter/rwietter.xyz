/* eslint-disable no-tabs */
import { useRouter } from 'next/router';
import * as CSS from 'features/article/styles';
import type { GetStaticPaths, GetStaticProps } from 'next';
import apolloClient from 'utils/apollo-client';
import { NextSEO } from 'components/SEO';
import { ArticleLayout } from 'features/ui/layouts';
// import { ArticleFooter } from 'features/article';
import { POSTS_QUERY } from 'queries/posts/posts';
import { POST_QUERY } from 'queries/post/post';
import dynamic from 'next/dynamic';

const ArticleHeader = dynamic(() => import('features/article/header'), { ssr: true });
const Markdown = dynamic(() => import('features/article/markdown'), { ssr: true });

const Page = ({ posts }: any) => {
  if (!posts) return null;

  const router = useRouter() as unknown as { asPath: string };

  const [post] = posts;

  return (
    <>
      <NextSEO
        title={post?.attributes?.title}
        description={post?.attributes?.description}
        image={post?.attributes?.image?.data?.attributes?.url}
        author={post?.attributes?.author?.data?.attributes?.name}
        url={`https://rwietterc.xyz${router.asPath}`}
        canonical={`https://rwietterc.xyz${router.asPath}`}
        content="article"
      />
      <ArticleLayout>
        <CSS.ArticleContainer>
          <CSS.ArticleMarkdownContainer>
            <ArticleHeader article={post} />
            <Markdown article={post} />
          </CSS.ArticleMarkdownContainer>
          {/* <ArticleFooter
            author={post?.attributes?.author?.data?.attributes?.name}
            name={post?.attributes?.title}
            category={post?.attributes?.category?.data?.attributes?.name}
          /> */}
        </CSS.ArticleContainer>
      </ArticleLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: POSTS_QUERY });

  if (!data) return { paths: [], fallback: true };

  const paths = data?.posts?.data?.map((post: any) => ({
    params: { slug: post.attributes.slug },
  }));

  if (!paths) return { paths: [], fallback: true };

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };

  const { data } = await apolloClient.query({
    query: POST_QUERY,
    variables: { slug: params.slug },
  });

  if (!data) return { props: {} };

  return {
    props: {
      slug: params.slug,
      posts: data.posts.data,
    },
    revalidate: 3600, // 1 hour
  };
};

export default Page;
