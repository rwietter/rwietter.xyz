import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';
import { useModalTheme } from 'store/modal-theme';
import { MdColorLens } from 'react-icons/md';
import * as S from './styles';

const activePath = (pathname: string) => (href: string, entrypath?: string) => {
  if (pathname === href) {
    return 'active';
  }

  if (entrypath && pathname.match(entrypath)) {
    return 'active';
  }

  return '';
};

const Header = () => {
  const { setIsVisible } = useModalTheme();
  const isActive = activePath(usePathname().trim());

  return (
    <S.Header>
      <S.Nav>
        <S.NavIterm className={isActive('/')}>
          <Link href="/">/home</Link>
        </S.NavIterm>
        <S.NavIterm className={isActive('/blog', '/blog/article/')}>
          <Link href="/blog">/blog</Link>
        </S.NavIterm>
        <S.NavIterm className={isActive('/projects')}>
          <Link href="/projects">/projects</Link>
        </S.NavIterm>
        <S.NavIterm className={isActive('/setup')}>
          <Link href="/setup">/setup</Link>
        </S.NavIterm>
        <S.NavIterm className={isActive('/posts', '/posts/post/')}>
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
