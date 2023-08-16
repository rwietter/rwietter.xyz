import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';
import { useModalTheme } from 'store/modal-theme';
import { MdColorLens } from 'react-icons/md';
import * as S from './styles';

const activeLink = (pathname: string, href: string, entrypath?: string) => {
  let isActive = '';
  if (pathname === href) {
    isActive = 'active';
  } else if (entrypath && pathname.match(entrypath)) {
    isActive = 'active';
  }
  return isActive;
};

const Header = () => {
  const { setIsVisible } = useModalTheme();
  const pathname = usePathname();

  // !TODO: in production, / is not active on first load
  console.log(pathname);

  return (
    <S.Header>
      <S.Nav>
        <S.NavIterm className={activeLink(pathname, '/')}>
          <Link href="/">/home</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/blog', '/blog/article/')}>
          <Link href="/blog">/blog</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/projects')}>
          <Link href="/projects">/projects</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/setup')}>
          <Link href="/setup">/setup</Link>
        </S.NavIterm>
        <S.NavIterm className={activeLink(pathname, '/posts', '/posts/post/')}>
          <Link href="/posts">/posts</Link>
        </S.NavIterm>
      </S.Nav>

      <S.Button
        type="button"
        aria-label="toggle change theme"
        onClick={() => setIsVisible(true)}
      >
        <MdColorLens aria-hidden="true" />
      </S.Button>
    </S.Header>
  );
};

export default Header;
