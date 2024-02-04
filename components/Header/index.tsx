import Link from 'next/link'
import { usePathname } from 'next/navigation'

import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const SwitchTheme = dynamic(
  () => import('components/SwitchTheme/SwitchTheme'),
  { ssr: true },
)

const activePath = (pathname: string) => (href: string, entrypath?: string) => {
  if (pathname === href) {
    return 'active'
  }

  if (entrypath && pathname.match(entrypath)) {
    return 'active'
  }

  return ''
}

const Header = () => {
  const isActive = activePath(usePathname().trim())
  const { t } = useTranslation()

  return (
    <S.Header>
      <S.Nav aria-label='navigation' role='menubar'>
        <S.NavIterm
          className={isActive('/')}
          aria-current='page'
          role='menuitem'
          title='Home'
        >
          <Link href='/'>/home</Link>
        </S.NavIterm>
        <S.NavIterm
          className={isActive('/blog', '/blog/article/')}
          aria-current='page'
          role='menuitem'
          title='Blog'
        >
          <Link href='/blog'>/blog</Link>
        </S.NavIterm>
        <S.NavIterm
          className={isActive('/projects')}
          aria-current='page'
          role='menuitem'
          title='Projects'
        >
          <Link href='/projects'>/{t('header.pages.projects')}</Link>
        </S.NavIterm>
        {/* <S.NavIterm className={isActive('/setup')} aria-current="page" role="menuitem" title="Setup">
          <Link href="/setup">/setup</Link>
        </S.NavIterm> */}
      </S.Nav>
      <SwitchTheme visible='header' />
    </S.Header>
  )
}

export default Header
