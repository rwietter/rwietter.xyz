import React from 'react';
import { topProjects } from './data';
import { ProjectItem } from '../project-item';
import { Grid } from './styles';

const TopProjects: React.FC = () => (
  <Grid>
    {topProjects.map((project) => (
      <ProjectItem key={project.link} project={project} />
    ))}
  </Grid>
);

export { TopProjects };
