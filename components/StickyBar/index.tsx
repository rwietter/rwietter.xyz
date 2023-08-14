/* eslint-disable no-return-assign */
// import { SiArchlinux } from 'react-icons/si';
import { FiList } from 'react-icons/fi';
import { VscHome } from 'react-icons/vsc';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsCommand } from 'react-icons/bs';
import { MdColorLens } from 'react-icons/md';
import { useKBar } from 'kbar';
import { useModalTheme } from 'store/modal-theme';
import * as S from './styles';

const StickyBar = () => {
  const { setIsVisible } = useModalTheme();
  const { query } = useKBar();

  const handleToTop = () => {
    const position = document.body.scrollTop || document.documentElement.scrollTop;
    let scrollAnimation;
    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout(handleToTop, 30);
    } else clearTimeout(scrollAnimation);
  };

  const handleOpenCommandBar = () => query.toggle();

  return (
    <S.ManuBarWrapper role="menubar">
      <S.MenuBarGroup>
        <S.MenuBarLink href="/" title="home page" role="menuitem">
          <S.MenuBarItem type="button" aria-label="up to home">
            <VscHome size={20} aria-hidden="true" />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink href="/blog" title="Blog" role="menuitem">
          <S.MenuBarItem type="button" aria-label="up to blog">
            <FiList size={20} aria-hidden="true" />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarItem>
          <BsCommand
            size={20}
            onClick={handleOpenCommandBar}
            aria-hidden="true"
            role="button"
          />
        </S.MenuBarItem>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Toggle Dark Mode"
          role="menuitem"
          onClick={() => setIsVisible(true)}
          className="theme"
          type="button"
          aria-label="toggle change theme"
        >
          <MdColorLens aria-hidden="true" />
        </S.MenuBarItem>
        <S.MenuBarItem title="go to top" role="menuitem" type="button">
          <AiOutlineArrowUp onClick={handleToTop} size={20} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.ManuBarWrapper>
  );
};

export { StickyBar };
