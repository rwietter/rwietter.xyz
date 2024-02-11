import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

const ArticleLayout: FC<Props> = ({ children }) => {
  return <div className='fade-in-layout'>{children}</div>
}

export default ArticleLayout
