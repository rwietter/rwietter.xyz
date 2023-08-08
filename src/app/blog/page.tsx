import SEO from 'components/SEO';
import { Articles } from 'src/domains/blog';
// import type { GetStaticProps } from 'next';
// import { ARTICLES_QUERY } from 'queries/articles/articles';
// import apolloClient from 'utils/apollo-client';
// import { blurImage } from 'utils/blur-image';
// import { IArticles } from 'features/blog/ts';
// import generateRssFeed from 'utils/feed-rss';

const Page = () => (
  <>
    <SEO
      title="Blog | Maurício Witter | Software Engineer"
      content="blog"
      url="https://rwietterc.xyz/blog"
      description="My blog, where I write about my experiences, my projects, and my life. :)"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <Articles />
  </>
);

// export const getStaticProps: GetStaticProps = async () => {
//   const { data, loading, errors } = await apolloClient.query({
//     query: ARTICLES_QUERY,
//   });

//   if (loading) return { props: { articles: null } };
//   if (errors) return { props: { articles: null } };

//   const articles: IArticles[] = data.articles.data.map(async (article: any) => {
//     const image = await blurImage(article?.attributes?.image?.data?.attributes?.url);

//     return {
//       ...article,
//       attributes: {
//         ...article.attributes,
//       },
//       blurDataURL: image,
//     };
//   });

//   const articlesData: IArticles[] = await Promise.all(articles);

//   const reorderArticles = [...articlesData].sort((a, b) => {
//     const articleA: number = new Date(a.attributes.publishedAt).getTime();
//     const articleB: number = new Date(b.attributes.publishedAt).getTime();
//     return articleB - articleA;
//   });

//   await generateRssFeed(reorderArticles);

//   return {
//     props: {
//       articles: reorderArticles,
//     },
//     revalidate: 300, // 5 minutes
//   };
// };

export default Page;
