import { NextSEO } from 'components/SEO'
import { TopProjects, YearProjects } from 'features/projects'
import { Wrapper } from 'features/projects/styles'
import { ContentLayout } from 'features/ui/layouts'

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
    <ContentLayout layout='small'>
      <Wrapper>
        <TopProjects />
        <YearProjects />
      </Wrapper>
    </ContentLayout>
  </>
)

export default Page
