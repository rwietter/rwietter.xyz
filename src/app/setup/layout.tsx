import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

const SetupLayout: FC<Props> = ({ children }) => {
  return <div className='fade-in-layout'>{children}</div>
}

export default SetupLayout
