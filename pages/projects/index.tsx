import React from 'react';
import { Layout } from 'layouts/content';

import { ProjectHeader } from 'components/project-header';
import { Project } from 'components/project';
import SEO from 'components/SEO';
import * as S from 'features/projects/styles';
import { projects } from 'features/projects/data';
import FadeIn from 'react-fade-in';
import { YearProjects } from 'components/year-projects';

const Projects: React.FC = () => (
  <Layout>
    <SEO
      title="Projects | Maurício W. | Software Engineer"
      content="website"
      url="https://rwietter.xyz"
      description="Here, in this page, you can find some of my favorite projects. I hope you enjoy it. :)"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <S.Wrapper>
      <ProjectHeader />
      <S.Grid>
        {projects.map((project) => (
          <FadeIn key={project.title} transitionDuration={2000}>
            <Project key={project.link} project={project} />
          </FadeIn>
        ))}
      </S.Grid>
    </S.Wrapper>
    <YearProjects />
  </Layout>
);
export default Projects;
