import { ProjectItem, projects } from './data';
import {
  Container, List, ListItem, ListItemName, ProjectItemContainer, Title, Year,
} from './styles';

export const YearProjects = () => (
  <Container>
    <Title>Todos Projetos</Title>
    {Object.keys(projects).sort((a, b) => Number(b) - Number(a)).map((year) => (
      <ProjectItemContainer key={year}>
        <Year>{year}</Year>
        <List>
          {projects[year].map((project: ProjectItem) => (
            <ListItem key={project.title}>
              <ListItemName href={project.github} target="_blank" rel="noopener noreferrer">
                <strong>{project.title}</strong>
                :
                <span>{project.description}</span>
              </ListItemName>
            </ListItem>
          ))}
        </List>
      </ProjectItemContainer>
    ))}
  </Container>
);
