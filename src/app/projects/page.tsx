'use client'
import { NextSEO } from 'src/components/SEO'
import { TopProjects, YearProjects } from 'src/domains/projects'

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
    <TopProjects />
    <YearProjects />
  </>
)

export default Page
