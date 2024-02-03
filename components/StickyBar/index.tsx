import { useKBar } from 'kbar'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BsCommand } from 'react-icons/bs'
import { FiList } from 'react-icons/fi'
import { IoLanguageOutline } from 'react-icons/io5'
import { VscHome } from 'react-icons/vsc'
import * as S from './styles'

const SwitchTheme = dynamic(
  () => import('components/SwitchTheme/SwitchTheme'),
  { ssr: true },
)

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
    <S.ManuBarWrapper>
      <S.MenuBarGroup role='menubar'>
        <S.MenuBarLink href='/' title='go to home page' role='menuitem'>
          <S.MenuBarItem aria-label='go to home page' role='button'>
            <VscHome size={20} aria-hidden='true' />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink href='/blog' title='go to blog' role='menuitem'>
          <S.MenuBarItem aria-label='go to blog' role='button'>
            <FiList size={20} aria-hidden='true' />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarItem
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
        </S.MenuBarItem>
      </S.MenuBarGroup>

      <S.MenuBarGroup role='menubar'>
        <S.MenuBarItem
          aria-label='Switch language'
          title='Switch language'
          role='menuitem'
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')
          }
        >
          <IoLanguageOutline size={20} />
        </S.MenuBarItem>
        <S.MenuBarItem
          title='Toggle Dark Mode'
          role='menuitem'
          className='theme'
          aria-label='toggle change theme'
        >
          <SwitchTheme visible='sticky' />
        </S.MenuBarItem>
        <S.MenuBarItem aria-label='go to top' title='go to top' role='menuitem'>
          <AiOutlineArrowUp onClick={handleToTop} size={20} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.ManuBarWrapper>
  )
}

export { StickyBar }
