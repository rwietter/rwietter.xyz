'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useTranslation } from 'react-i18next'
import SwitchTheme from 'src/components/SwitchTheme'
// import * as S from './styles'
import styles from './styles.module.css'

const activePath = (pathname: string) => (href: string, entry?: string) => {
  if (pathname === href) return 'active'
  if (entry && pathname.match(entry)) return 'active'
  return ''
}

const Header = () => {
  const isActive = activePath(usePathname())
  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label='navigation' role='menubar'>
        <div
          className={styles.navItem}
          data-active={isActive('/')}
          aria-current='page'
          role='menuitem'
          title='Home'
        >
          <Link className={styles.link} href='/'>
            /home
          </Link>
        </div>
        <div
          className={styles.navItem}
          data-active={isActive('/blog', '/blog/article/')}
          aria-current='page'
          role='menuitem'
          title='Blog'
        >
          <Link className={styles.link} href='/blog'>
            /blog
          </Link>
        </div>
        <div
          className={styles.navItem}
          data-active={isActive('/projects')}
          aria-current='page'
          role='menuitem'
          title='Projects'
        >
          <Link className={styles.link} href='/projects'>
            /{t('header.pages.projects')}
          </Link>
        </div>
        {/* <div className={isActive('/setup')} aria-current="page" role="menuitem" title="Setup">
          <Link href="/setup">/setup</Link>
        </div> */}
      </nav>
      <SwitchTheme visible='header' />
    </header>
  )
}

export default Header
