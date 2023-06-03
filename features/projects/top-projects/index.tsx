import React from 'react';
import { dbTopProjects } from './data';
import { ProjectItem } from '../project-item';
import { Grid } from './styles';

const TopProjects: React.FC = () => (
  <Grid>
    {dbTopProjects.map((project) => (
      <ProjectItem key={project.link} project={project} />
    ))}
  </Grid>
);

export { TopProjects };
