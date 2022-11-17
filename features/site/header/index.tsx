import { Dark } from 'components/icons/Dark';
import { Light } from 'components/icons/Light';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeStore, useThemeStore } from 'store/switch-theme';

import * as St from './styles';

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
  const { theme, setTheme } = useThemeStore() as ThemeStore;

  const { pathname } = useRouter();

  const handleSwitchTheme = () => {
    if (setTheme) { setTheme(theme === 'dark' ? 'light' : 'dark'); }
  };

  return (
    <St.Header>
      <St.Nav>
        <div className={activeLink(pathname, '/')}>
          <Link href="/">home</Link>
        </div>
        <div className={activeLink(pathname, '/blog', '/blog/article/')}>
          <Link href="/blog">blog</Link>
        </div>
        <div className={activeLink(pathname, '/projects')}>
          <Link href="/projects">projects</Link>
        </div>
      </St.Nav>
      <St.DarkMode type="button" aria-label="toggle change theme" name="Enable dark mode" onClick={handleSwitchTheme}>
        {theme === 'dark' ? <Dark aria-hidden="true" /> : <Light aria-hidden="true" />}
      </St.DarkMode>
    </St.Header>
  );
};
export default Header;
