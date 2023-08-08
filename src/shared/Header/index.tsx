'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
<<<<<<< HEAD
import { useTheme } from 'store/switch-theme';
import { CiStar, CiHome } from 'react-icons/ci';
import { BsCodeSlash } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { VscSymbolArray } from 'react-icons/vsc';

import * as S from './styles';
=======

import * as S from './styles';
import { SwitchTheme } from './SwitchTheme';
>>>>>>> 145ecd6 (refactor: rsc)

const activeLink = (pathname: string, href: string, article?: string) => {
  let isActive = '';
  if (pathname === href) {
    isActive = 'active';
  } else if (article && pathname.match(article)) {
    isActive = 'active';
  }
  return isActive;
};

const Header = () => {
<<<<<<< HEAD
  const { theme, setTheme } = useTheme();

  const pathname = usePathname() ?? '';

  const handleSwitchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

=======
  const pathname = usePathname() ?? '';

>>>>>>> 145ecd6 (refactor: rsc)
  return (
    <S.Header>
      <S.Nav>
        <S.NavIterm className={activeLink(pathname, '/')}>
<<<<<<< HEAD
          <CiHome aria-hidden="true" size={19} color="var(--colors-gray50)" />
          <Link href="/">home</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/blog', '/blog/article/')}>
          <CiStar aria-hidden="true" size={19} color="var(--colors-gray50)" />
          <Link href="/blog">blog</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/projects')}>
          <BsCodeSlash aria-hidden="true" size={18} color="var(--colors-gray50)" />
          <Link href="/projects">projects</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/setup')}>
          <VscSymbolArray aria-hidden="true" size={18} color="var(--colors-gray50)" />
          <Link href="/setup">setup</Link>
        </S.NavIterm>
      </S.Nav>
      <S.DarkMode type="button" aria-label="toggle change theme" name="Enable dark mode" onClick={handleSwitchTheme}>
        {
          theme === 'dark'
            ? <IoMdMoon className="dark" aria-hidden="true" />
            : <MdWbSunny className="light" aria-hidden="true" />
        }
      </S.DarkMode>
=======
          <Link href="/">home</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/blog', '/blog/article/')}>
          <Link href="/blog">blog</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/projects')}>
          <Link href="/projects">projects</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/setup')}>
          <Link href="/setup">setup</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/posts')}>
          <Link href="/posts">posts</Link>
        </S.NavIterm>
      </S.Nav>
      <SwitchTheme />
>>>>>>> 145ecd6 (refactor: rsc)
    </S.Header>
  );
};

export default Header;