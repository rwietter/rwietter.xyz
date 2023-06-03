import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'store/switch-theme';
import { CiStar, CiHome } from 'react-icons/ci';
import { BsCodeSlash } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';

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
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const handleSwitchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <St.Header>
      <St.Nav>
        <div className={activeLink(pathname, '/')}>
          <CiHome aria-hidden="true" size={19} color="var(--colors-gray50)" />
          <Link href="/">home</Link>
        </div>
        <div className={activeLink(pathname, '/blog', '/blog/article/')}>
          <CiStar aria-hidden="true" size={19} color="var(--colors-gray50)" />
          <Link href="/blog">blog</Link>
        </div>
        <div className={activeLink(pathname, '/projects')}>
          <BsCodeSlash aria-hidden="true" size={18} color="var(--colors-gray50)" />
          <Link href="/projects">projects</Link>
        </div>
      </St.Nav>
      <St.DarkMode type="button" aria-label="toggle change theme" name="Enable dark mode" onClick={handleSwitchTheme}>
        {theme === 'dark' ? <IoMdMoon aria-hidden="true" /> : <MdWbSunny aria-hidden="true" />}
      </St.DarkMode>
    </St.Header>
  );
};

export default Header;
