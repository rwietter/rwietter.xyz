import { Metadata } from 'next'

export const makeSeo = ({
  title,
  description,
  image,
  slug,
  ogText,
}: {
  title: string
  description: string
  image: string
  slug: string
  ogText: string
}): Metadata => {
  return {
    title,
    description,
    twitter: {
      site: '@rwietter',
      creator: '@rwietter',
      // @ts-ignore
      card: 'summary_large_image',
      title: title,
      description: description,
      // image: ogImageUrl,
      // imageAlt: ogText.replace('*', ''),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: ogText.replace('*', '').replace('/n', ''),
        },
      ],
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://www.rwietterc.xyz${slug}`,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: ogText.replace('*', '').replace('/n', ''),
        },
      ],
    },
  }
}
