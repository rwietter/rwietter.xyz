'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as S from './styles';
import { SwitchTheme } from './SwitchTheme';

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
  const pathname = usePathname() ?? '';

  return (
    <S.Header>
      <S.Nav>
        <S.NavIterm className={activeLink(pathname, '/')}>
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
    </S.Header>
  );
};

export default Header;
