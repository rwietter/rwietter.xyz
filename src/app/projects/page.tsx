import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { makeSeo } from 'src/components/SEO/makeSeo'
import { TopProjects } from 'src/domains/projects'

const YearProjects = dynamic(() =>
  import('src/domains/projects/YearProjects').then((mod) => ({
    default: mod.YearProjects,
  })),
)

export const metadata: Metadata = makeSeo({
  title: 'Projects | Maurício W. | Software Developer',
  description:
    'Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)',
  image:
    'https://res.cloudinary.com/ddwnioveu/image/upload/v1707422678/large_joshua_sortino_71v_Ab1_FXB_6g_unsplash_46a1453603.jpg',
  slug: '/projects',
  ogText:
    'Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)',
  abstract: 'Projects were I worked on.',
  keywords: 'projects, portfolio, software, developer',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://rwietterc.xyz/projects',
  name: 'Projects | Mauricio Witter | rwietter',
  description:
    'Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)',
}

const Page = () => (
  <>
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <TopProjects />
    <Suspense fallback={<div>Loading...</div>}>
      <YearProjects />
    </Suspense>
  </>
)

export default Page
