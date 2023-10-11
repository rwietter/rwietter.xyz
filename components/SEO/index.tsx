/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import { NextSeo } from 'next-seo';

const JSONLD = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Maurício Witter Blog',
  brand: 'rwietter',
  description: 'This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Constantina',
    addressRegion: 'RS',
    postalCode: '9968000',
    streetAddress: 'Bulevar kralja Aleksandra 1',
  },
  social: [
    'https://twitter.com/rwietter',
    'https://rwietterc.xyz',
  ],
  email: 'mailto:mauriciobw17@gmail.com',
  image: 'https://avatars.githubusercontent.com/u/46854467?s=400&u=16a52bab3d6dbcbda716ed7d6bab84b3b307bd22&v=4',
  jobTitle: 'Software Developer',
  telephone: '(54) 99671-1324',
  url: 'https://rwietterc.xyz/',
};

interface SEOProps {
  title: string;
  description: string;
  url: string;
  content: 'article' | 'website' | 'blog';
  image: string;
  author?: string;
  ogtype?: 'article:section' | 'website' | 'article:author' | 'article:tag' | '';
}
const SEO: FC<SEOProps> = ({
  title = '', description = '', url = '', image = '', author = 'Maurício Witter', ogtype = 'article:section',
}) => (
  <>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
    <link rel="manifest" href="manifest.json" />
    <meta name="description" content={description} />
    <meta httpEquiv="content-language" content="pt-BR" />
    <meta property="og:title" content={title} key="ogtitle" />
    <meta property="og:url" content={url} key="ogurl" />
    <link rel="icon" href="/android-chrome-512x512.png" />
    <meta property="og:image" content={image} key="ogimage" />
    <meta property="og:type" content={ogtype} />
    <meta property="twitter:card" content="summary_large_image" key="twcard" />
    <meta property="twitter:creator" content="@rwietter" key="twcreator" />
    <meta property="twitter:domain" content="http://rwietterc.xyz/" key="twdomain" />
    <meta property="twitter:url" content="https://twitter.com/rwietter" key="twurl" />
    <meta property="twitter:image:source" content={image} />
    <meta property="twitter:image" content={image} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta name="twitter:site" content="@rwietter" />
    <meta property="og:site_name" content={title} key="ogsitename" />
    <meta property="og:description" content={description} key="ogdesc" />
    <link rel="icon" href="/icons/android-chrome-512x512.png" />
    <link sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
    <link sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
    <link sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
    <link sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
    <link sizes="60x60" href="/icons/apple-touch-icon-60x60.png" />
    <link sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
    <link sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
    <link sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="/icons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/icons/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="/icons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="/icons/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="/icons/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="/icons/mstile-310x310.png" />
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="keywords" content="Maurício Witter, rwietter, HTML, CSS, JavaScript, React, Typescript, Framework, Nextjs" />
    <meta name="author" content={author} />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="google-site-verification" content="oQ_XpS8_c5DYamhVCpljtPUmV-CX7D8zVxHbTd_ExNc" />
    <link href="https://gmpg.org/xfn/11" />
    <link rel="icon" href="/android-chrome-512x512.png" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <meta property="og:locale" content="pt-BR" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
    />
  </>
);

export const NextSEO: FC<SEOProps> = (props) => {
  const {
    title, description, url, content = 'website', image, author = '@rwietter',
  } = props;
  return (
    <NextSeo
      title={title}
      description={description}
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
            secureUrl: image,
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: `Image of the ${content} ${title}`,
            type: 'image/jpeg',
            secureUrl: image,
          },
          { url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png' },
          { url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png' },
        ],
        site_name: author,
      }}
      additionalLinkTags={[
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
        site: 'https://rwietterc.xyz',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default SEO;
