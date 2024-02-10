import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectItem, projects } from './data'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

export const YearProjects = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('projects.title')}</h1>
      {Object.keys(projects)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => (
          <div className={styles.projectItemContainer} key={year}>
            <span className={styles.year}>{year}</span>
            <div className={styles.list}>
              {projects[year].map((project: ProjectItem) => (
                <ProjectItemComponent key={project.title} project={project} />
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

const ProjectItemComponent = ({ project }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)
  const { t } = useTranslation()

  return (
    <motion.section
      className={styles.listItem}
      key={project.title}
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      {isBeingHovered && (
        <motion.div
          className={styles.hoverBackground}
          layoutId='background'
          layout
        />
      )}
      <a
        className={styles.listItemName}
        href={project.github}
        target='_blank'
        rel='noopener noreferrer'
      >
        <strong>{project.title}</strong>:
        <span>
          {t(`projects.${project.title.toLowerCase().replace(/ /g, '-')}`)}
        </span>
      </a>
    </motion.section>
  )
}
