import React from 'react'
import { topProjects } from './data'
import styles from './styles.module.css'
import { ProjectItem } from './ProjectItem'

const TopProjects: React.FC = () => (
  <section className={styles.grid}>
    {topProjects
      .sort((item, bitem) => (item.title < bitem.title ? -1 : 1))
      .map((project) => (
        <ProjectItem key={project.link} project={project} />
      ))}
  </section>
)

export { TopProjects }
