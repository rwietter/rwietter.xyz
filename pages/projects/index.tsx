import SEO from 'components/SEO';
import { Wrapper } from 'features/projects/styles';
import { ContentLayout } from 'features/ui/layouts';
import { YearProjects, TopProjects, ProjectHeader } from 'features/projects';

const Page = () => (
  <>
    <SEO
      title="Projects | Maurício W. | Software Engineer"
      content="website"
      url="https://rwietter.xyz"
      description="Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="small">
      <Wrapper>
        <ProjectHeader />
        <TopProjects />
        <YearProjects />
      </Wrapper>
    </ContentLayout>
  </>
);

export default Page;
