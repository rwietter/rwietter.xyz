import { FC, PropsWithChildren } from 'react'

import '../../../../styles/dracula-prism.css'
import '../../../../styles/article-fonts.css'

type Props = PropsWithChildren

const ArticleLayout: FC<Props> = ({ children }) => {
  return <div className='fade-in-layout'>{children}</div>
}

export default ArticleLayout
