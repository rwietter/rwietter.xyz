/* eslint-disable no-tabs */
import { useRouter } from 'next/router';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import { RiTimer2Line } from 'react-icons/ri';
import * as CSS from 'features/article/styles';
import type { GetStaticPaths, GetStaticProps } from 'next';
import apolloClient from 'utils/apollo-client';
import { getReadingTime } from 'utils/getTimeReading';
import { getLocaleDate } from 'utils/get-locale-date';
import SEO from 'components/SEO';
import Link from 'next/link';
import { ArticleLayout } from 'features/ui/layouts';
// import { ArticleFooter } from 'features/article';
import { POSTS_QUERY } from 'queries/posts/posts';
import { POST_QUERY } from 'queries/post/post';

const Page = ({ posts }: any) => {
  if (!posts) return null;

  const router = useRouter() as unknown as { asPath: string };

  const [post] = posts;
  const { readTime } = getReadingTime(post?.attributes?.content);
  const { localeDate: publishedAt } = getLocaleDate(post?.attributes?.publishedAt, 'pt-BR');

  return (
    <>
      <SEO
        title={post?.attributes?.title}
        description={post?.attributes?.description}
        image={post?.attributes?.image?.data?.attributes?.url}
        author={post?.attributes?.author?.data?.attributes?.name}
        url={`https://rwietterc.xyz${router.asPath}`}
        content="article"
      />
      <ArticleLayout>
        <CSS.ArticleContainer>
          <CSS.ArticleMarkdownContainer>
            <CSS.ArticleHeader>
              <CSS.InfoHeader>
                <Link href="/posts">
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

              <CSS.ArticleTitle>{post?.attributes?.title}</CSS.ArticleTitle>
              <CSS.ArticleDescription>
                {post?.attributes?.description}
              </CSS.ArticleDescription>
            </CSS.ArticleHeader>
            <CSS.Article>
              <CSS.ArticleMarkdown className={markdownLight['markdown-body']}>
                {post?.attributes?.content}
              </CSS.ArticleMarkdown>
            </CSS.Article>
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
