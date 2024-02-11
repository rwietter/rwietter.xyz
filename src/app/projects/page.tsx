import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import JSONLD from 'src/components/JSON-LD'
import { NextSEO } from 'src/components/SEO'
import { TopProjects } from 'src/domains/projects'

const YearProjects = dynamic(() =>
  import('src/domains/projects/YearProjects').then((mod) => ({
    default: mod.YearProjects,
  })),
)

const Page = () => (
  <>
    <NextSEO
      title='Projects | Maurício W. | Software Developer'
      content='website'
      url='https://rwietterc.xyz'
      canonical='https://rwietterc.xyz/projects'
      description='Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)'
      image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
    />
    <JSONLD
      type='Blog'
      authorName='Maurício Witter'
      url='https://rwietterc.xyz/projects'
      title='Projects | Maurício W. | Software Developer'
      description='Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)'
      image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
    />
    <TopProjects />
    <Suspense fallback={<div>Loading...</div>}>
      <YearProjects />
    </Suspense>
  </>
)

export default Page
