import Link from 'next/link';
import { styled } from 'styles/theme';

export const ManuBarWrapper = styled('aside', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  bottom: '0',
  height: '3rem',
  padding: '0 0.3rem',
  position: 'fixed',
  width: '100%',
  transition: '$transitonTheme, border 0.35s ease',
  background: '$mediumBackground',

  '@bp5': {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    padding: '0.8rem 0',
    position: 'fixed',
    borderLeft: '2px solid $background',
    right: '0',
    width: '3.5rem',
  },
});

export const MenuBarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  '@bp5': {
    flexDirection: 'column',
  },
});

export const MenuBarLink = styled(Link, {
  display: 'block',
  color: '$primary',
  transition: 'color 0.35s ease',
});

export const MenuBarItem = styled('button', {
  background: 'none',
  border: 'none',
  outline: 'none',
  margin: '0',
  color: '$gray50',
  cursor: 'pointer',
  padding: '1.1rem',
  position: 'relative',
  transition: 'color 0.35s ease',
  display: 'flex',
  alignItems: 'center',

  '@bp5': {
    padding: '.9rem',
    position: 'relative',
    '&:hover': {
      color: '$primary',
    },
  },

});
