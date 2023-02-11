import React from 'react';
import { BlogLayout } from 'layouts/blog';
import SEO from 'components/SEO';
import { LayoutCSS } from 'layouts/blog/styles';
import { Articles } from 'components/articles';
import FadeIn from 'react-fade-in';
import type { GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import dynamic from 'next/dynamic';

const MenuBar = dynamic(() => import('components/menu-bar'), {
  ssr: false,
});

const Header = dynamic(() => import('features/site/header'), {
  ssr: false,
});

const Navbar = dynamic(() => import('components/blog-navbar'), {
  ssr: false,
});

const Blog: React.FC<any> = ({ articles }) => (
  <div>
    <BlogLayout>
      <SEO
        title="Blog | Maurício Witter | Software Engineer"
        content="blog"
        url="https://rwietter.xyz/blog"
        description="My blog, where I write about my experiences, my projects, and my life. :)"
        image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
      />
      <Header />
      <LayoutCSS>
        <Navbar />
        <FadeIn transitionDuration={2000}>
          <Articles articles={articles} />
        </FadeIn>
      </LayoutCSS>
      <MenuBar />
    </BlogLayout>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading, errors } = await apolloClient.query({
    query: ARTICLES_QUERY,
  });

  if (loading) return { props: { articles: null } };
  if (errors) return { props: { articles: null } };

  return {
    props: {
      articles: data.articles.data,
    },
    revalidate: 60,
  };
};

export default Blog;
