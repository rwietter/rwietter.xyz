// import { SiArchlinux } from 'react-icons/si';
import { FiList } from 'react-icons/fi';
import { VscHome } from 'react-icons/vsc';
import { AiOutlineArrowUp } from 'react-icons/ai';

import { ThemeStore, useThemeStore } from 'store/switch-theme';
import { Dark } from 'components/icons/Dark';
import { Light } from 'components/icons/Light';
import * as S from './styles';

const MenuBar = () => {
  const themeStore = useThemeStore() as ThemeStore;

  const handleToTop = () => {
    const position = document.body.scrollTop || document.documentElement.scrollTop;
    let scrollAnimation;
    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout(handleToTop, 30);
    } else clearTimeout(scrollAnimation);
  };

  const handleSwitchTheme = () => {
    if (themeStore.setTheme) {
      themeStore.setTheme(themeStore.theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <S.ManuBarWrapper role="navigation">
      <S.MenuBarGroup>
        <S.MenuBarLink href="/">
          <S.MenuBarItem>
            <VscHome size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink href="/blog">
          <S.MenuBarItem>
            <FiList size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarLink href="/archlinux">
          <S.MenuBarItem>
            {/* <SiArchlinux size={20} /> */}
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarItem
          title="Dark Mode"
          onClick={handleSwitchTheme}
          className="theme"
        >
          {themeStore.theme === 'dark' ? <Dark /> : <Light />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Go top">
          <AiOutlineArrowUp onClick={handleToTop} size={20} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.ManuBarWrapper>
  );
};

export { MenuBar };
