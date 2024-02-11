import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

const BlogLayout: FC<Props> = ({ children }) => {
  return <div className='fade-in-layout'>{children}</div>
}

export default BlogLayout
