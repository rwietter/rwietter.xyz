import { ReactNode, memo } from 'react'
import { Kbar } from './Kbar'

type Props = {
  children: ReactNode
}

const CommandBar = ({ children }: Props) => {
  return <Kbar>{children}</Kbar>
}

export default memo(CommandBar)
