import { Metadata } from 'next'
import { KbarInit } from 'src/components/Kbar/KbarInit'
import { NextSEO } from 'src/components/SEO'
import { makeSeo } from 'src/components/SEO/makeSeo'
import AuthorContent from 'src/domains/home/author-content'
import AuthorHeader from 'src/domains/home/author-header'

export const revalidate = 60

const meta = {
  title: 'Mauricio Witter | Software Developer',
  description:
    'This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it',
  image:
    'https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png',
}

export const metadata: Metadata = makeSeo({
  title: meta.title,
  description: meta.description,
  slug: '/',
  image: meta.image,
  ogText: `*${meta.title}*;/n/n ${meta.description}`,
})

const Page = () => (
  <>
    <NextSEO
      title='Mauricio Witter | Software Developer'
      content='website'
      url='https://rwietterc.xyz'
      canonical='https://rwietterc.xyz/'
      description='This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.'
      image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
    />
    <AuthorHeader />
    <AuthorContent />
    <KbarInit />
  </>
)

export default Page
