import React from 'react';
import { Layout } from 'layouts/content';

import { ProjectHeader } from 'components/project-header';
import { Project } from 'components/project';
import { NextSEO } from 'components/SEO';
import * as S from 'features/projects/styles';
import { projects } from 'features/projects/data';

const Projects: React.FC = () => (
  <Layout>
    <NextSEO
      title="@rwietter"
      content="website"
      url="https://dev.rwietter.xyz"
      description="Software developer, passionate about technology, design and software engineering"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <S.Wrapper>
      <ProjectHeader />
      <S.Grid>
        {projects.map((project) => (
          <Project key={project.link} project={project} />
				))}
      </S.Grid>
    </S.Wrapper>
  </Layout>
);

export default Projects;
