import { FC, ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './project.module.css'
import { motion } from 'framer-motion'

interface IProject {
  project: {
    title: string
    description: string
    image: string
    github: string
    link: string
    tags: string[]
    icon: ReactNode
  }
}

export const ProjectItem: FC<IProject> = ({ project }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)
  const { t } = useTranslation()

  return (
    <motion.a
      className={styles.wrapper}
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {isBeingHovered && (
        <motion.div
          className={styles.hoverBackground}
          layoutId='background'
          layout
        />
      )}
      <div className={styles.container}>
        <span>
          {project.icon}
          <div>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>
              {t(`projects.${project.title.replace(/ /g, '-').toLowerCase()}`)}
            </p>
          </div>
        </span>
      </div>
    </motion.a>
  )
}
