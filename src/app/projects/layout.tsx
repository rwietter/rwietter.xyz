import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

const ProjectsLayout: FC<Props> = ({ children }) => {
  return <div className='fade-in-layout'>{children}</div>
}

export default ProjectsLayout
