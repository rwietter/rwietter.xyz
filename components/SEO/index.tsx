/* eslint-disable react/require-default-props */
import Head from 'next/head';
import { FC } from 'react';
import { NextSeo } from 'next-seo';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  content: 'article' | 'website' | 'blog';
  image: string;
  author?: string;
}
const SEO: FC<SEOProps> = ({
  title = '', description = '', url = '', content = 'website', image = '', author = '@rwietter',
}) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta httpEquiv="content-language" content="pt-BR" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={content} />
    <link rel="icon" href="/icons/favicon.ico" />
    <meta property="og:image" content={image} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image:source" content={image} />
    <meta property="twitter:creator" content={author} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta name="twitter:site" content="@rwietter" />
  </Head>
);

export const NextSEO: FC<SEOProps> = (props) => {
  const {
    title, description, url, content = 'website', image, author = '@rwietter',
  } = props;
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`${url}`}
      openGraph={{
        url: `${url}`,
        title,
        description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: `Image of the ${content} ${title}`,
            type: 'image/jpeg',
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: `Image of the ${content} ${title}`,
            type: 'image/jpeg',
          },
          { url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png' },
          { url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png' },
        ],
        site_name: author,
      }}
      additionalLinkTags={[
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap',
          rel: 'stylesheet',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap',
          rel: 'stylesheet',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;600;800&display=swap',
          rel: 'stylesheet',
        },
        {
          href: '/manifest.json',
          rel: 'manifest',
        },
      ]}
      additionalMetaTags={[
        {
          name: 'theme-color',
          content: '#13141c',
        },
      ]}
      twitter={{
        handle: '@rwietter',
        site: 'https://dev.rwietter.xyz',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default SEO;
