import { Metadata } from 'next'
import { KbarInit } from 'src/components/Kbar/KbarInit'
import { makeSeo } from 'src/components/SEO/makeSeo'
import AuthorContent from 'src/domains/home/author-content'
import AuthorHeader from 'src/domains/home/author-header'

export const revalidate = 60

export const metadata: Metadata = makeSeo({
  title: 'Mauricio Witter | Software Developer',
  description:
    'This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.',
  image:
    'https://res.cloudinary.com/ddwnioveu/image/upload/v1707422678/large_joshua_sortino_71v_Ab1_FXB_6g_unsplash_46a1453603.jpg',
  slug: '/',
  ogText:
    'This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.',
  abstract: 'My journey as a Software Developer.',
  keywords: 'software, developer, blog, journey',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://rwietterc.xyz/',
  name: 'Mauricio Witter | Software Developer',
  description:
    'This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.',
}

const Page = () => (
  <>
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <AuthorHeader />
    <AuthorContent />
    <KbarInit />
  </>
)

export default Page
