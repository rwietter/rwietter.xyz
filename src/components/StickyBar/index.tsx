'use client'

import { useKBar } from 'kbar'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BsCommand } from 'react-icons/bs'
import { FiList } from 'react-icons/fi'
import { IoLanguageOutline } from 'react-icons/io5'
import { VscHome } from 'react-icons/vsc'
import styles from './styles.module.css'

import SwitchTheme from 'src/components/SwitchTheme/SwitchTheme'

const StickyBar = () => {
  const { query } = useKBar()
  const { i18n } = useTranslation()

  const handleToTop = () => {
    const position =
      document.body.scrollTop || document.documentElement.scrollTop
    let scrollAnimation = undefined
    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)))
      scrollAnimation = setTimeout(handleToTop, 30)
    } else clearTimeout(scrollAnimation)
  }

  const handleOpenCommandBar = () => query.toggle()

  return (
    <footer className={styles.manuBar}>
      <div className={styles.menuBarGroup} role='menubar'>
        <Link
          className={styles.menuBarLink}
          href='/'
          title='go to home page'
          role='menuitem'
        >
          <div
            className={styles.menuBarItem}
            aria-label='go to home page'
            role='button'
          >
            <VscHome size={20} aria-hidden='true' />
          </div>
        </Link>
        <Link
          className={styles.menuBarLink}
          href='/blog'
          title='go to blog'
          role='menuitem'
        >
          <div
            className={styles.menuBarItem}
            aria-label='go to blog'
            role='button'
          >
            <FiList size={20} aria-hidden='true' />
          </div>
        </Link>
        <div
          className={styles.menuBarItem}
          role='menuitem'
          title='open command bar'
          aria-label='open command bar'
        >
          <BsCommand
            size={20}
            onClick={handleOpenCommandBar}
            aria-hidden='true'
            role='button'
          />
        </div>
      </div>

      <div className={styles.menuBarGroup} role='menubar'>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className={styles.menuBarItem}
          aria-label='Switch language'
          title='Switch language'
          role='menuitem'
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')
          }
        >
          <IoLanguageOutline size={20} />
        </div>
        <div
          className={styles.menuBarItem}
          title='Toggle Dark Mode'
          role='menuitem'
          aria-label='toggle change theme'
        >
          <SwitchTheme visible='sticky' />
        </div>
        <div
          className={styles.menuBarItem}
          aria-label='go to top'
          title='go to top'
          role='menuitem'
        >
          <AiOutlineArrowUp onClick={handleToTop} size={20} />
        </div>
      </div>
    </footer>
  )
}

export { StickyBar }
