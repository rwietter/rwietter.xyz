import React from 'react';
import { Layout } from 'layouts/content';

import { ProjectHeader } from 'components/project-header';
import { Project } from 'components/project';
import { NextSEO } from 'components/SEO';
import * as S from 'features/projects/styles';
import { projects } from 'features/projects/data';
import FadeIn from 'react-fade-in';

const Projects: React.FC = () => (
  <Layout>
    <NextSEO
      title="@rwietter"
      content="website"
      url="https://rwietter.xyz"
      description="Software developer, passionate about technology, design and software engineering"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <S.Wrapper>
      <ProjectHeader />
      <S.Grid>
        {projects.map((project) => (
          <FadeIn transitionDuration={500}>
            <Project key={project.link} project={project} />
          </FadeIn>
				))}
      </S.Grid>
    </S.Wrapper>
  </Layout>
);

export default Projects;
