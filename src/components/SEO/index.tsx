'use client'

import { NextSeo } from 'next-seo'
import { FC } from 'react'

// export const JSONLD = {
//   '@context': 'http://schema.org',
//   '@type': 'Person',
//   name: 'Maurício Witter',
//   brand: 'rwietter',
//   description:
//     'This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.',
//   address: {
//     '@type': 'PostalAddress',
//     addressLocality: 'Constantina',
//     addressRegion: 'RS',
//     postalCode: '9968000',
//     streetAddress: '',
//   },
//   social: ['https://twitter.com/rwietter', 'https://rwietterc.xyz'],
//   email: 'mailto:mauriciobw17@gmail.com',
//   image:
//     'https://avatars.githubusercontent.com/u/46854467?s=400&u=16a52bab3d6dbcbda716ed7d6bab84b3b307bd22&v=4',
//   jobTitle: 'Software Developer',
//   telephone: '(54) 99671-1324',
//   url: 'https://rwietterc.xyz/',
// }

interface SEOProps {
  title: string
  description: string
  url: string
  content: 'article' | 'website' | 'blog'
  image: string
  author?: string
  canonical?: string
  ogtype?: 'article:section' | 'website' | 'article:author' | 'article:tag' | ''
}

export const NextSEO: FC<SEOProps> = (props) => {
  const {
    title,
    description,
    canonical,
    url,
    content = 'website',
    image,
    author = '@rwietter',
  } = props
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical || 'https://rwietterc.xyz/blog'}
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
          {
            url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1707422678/large_joshua_sortino_71v_Ab1_FXB_6g_unsplash_46a1453603.jpg',
          },
          {
            url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1707422678/large_joshua_sortino_71v_Ab1_FXB_6g_unsplash_46a1453603.jpg',
          },
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
  )
}
