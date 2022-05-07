import React from 'react';
import { AiFillHome, AiFillRead } from 'react-icons/ai';
import { SiArchlinux } from 'react-icons/si';
import { TiLightbulb } from 'react-icons/ti';
import { RiArrowUpCircleFill } from 'react-icons/ri';

import { ThemeStore, useThemeStore } from 'store/switch-theme';
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
            <AiFillHome size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink href="/blog">
          <S.MenuBarItem>
            <AiFillRead size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarLink href="arch-linux">
          <S.MenuBarItem>
            <SiArchlinux size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarItem
          title="Dark Mode"
          onClick={handleSwitchTheme}
          className="theme"
        >
          <TiLightbulb size={20} />
        </S.MenuBarItem>
        <S.MenuBarItem title="Go top">
          <RiArrowUpCircleFill onClick={handleToTop} size={20} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.ManuBarWrapper>
  );
};

export { MenuBar };
