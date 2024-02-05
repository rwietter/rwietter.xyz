import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectItem, projects } from './data'
import * as S from './styles'

export const YearProjects = () => {
  const { t } = useTranslation()
  return (
    <S.Container>
      <S.Title>{t('projects.years.title')}</S.Title>
      {Object.keys(projects)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => (
          <S.ProjectItemContainer key={year}>
            <S.Year>{year}</S.Year>
            <S.List>
              {projects[year].map((project: ProjectItem) => (
                <ProjectItemComponent key={project.title} project={project} />
              ))}
            </S.List>
          </S.ProjectItemContainer>
        ))}
    </S.Container>
  )
}

const ProjectItemComponent = ({ project }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)
  const { t } = useTranslation()

  return (
    <S.ListItem
      key={project.title}
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      {isBeingHovered && <S.HoverBackground layoutId='background' layout />}
      <S.ListItemName
        href={project.github}
        target='_blank'
        rel='noopener noreferrer'
      >
        <strong>{project.title}</strong>:
        <span>
          {t(
            `projects.years.${project.title.toLowerCase().replace(/ /g, '-')}`,
          )}
        </span>
      </S.ListItemName>
    </S.ListItem>
  )
}
