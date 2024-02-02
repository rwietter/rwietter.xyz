import Header from 'components/Header'
import { StickyBar } from 'components/StickyBar'
import { FC, ReactNode } from 'react'
import { LayoutCSS, Main } from './styles'

interface LayoutProps {
  children: ReactNode
  layout?: 'small' | 'medium' | 'large' | 'full'
}

const Layout: FC<LayoutProps> = ({ children, layout = 'small' }) => (
  <Main>
    <Header />
    <LayoutCSS className='fade-in-layout' layout={layout}>
      {children}
    </LayoutCSS>
    <StickyBar />
  </Main>
)

export { Layout }
