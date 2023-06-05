import SEO from 'components/SEO';
import { Wrapper } from 'features/projects/styles';
import { ContentLayout } from 'features/ui/layouts';
import { YearProjects, TopProjects } from 'features/projects';
import { PageTitle } from 'globals/components';

const Page = () => (
  <>
    <SEO
      title="Projects | Maurício W. | Software Engineer"
      content="website"
      url="https://rwietterc.xyz"
      description="Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="small">
      <Wrapper>
        <PageTitle title="Trabalho, hobby & open source" color="primary" />
        <TopProjects />
        <YearProjects />
      </Wrapper>
    </ContentLayout>
  </>
);

export default Page;
