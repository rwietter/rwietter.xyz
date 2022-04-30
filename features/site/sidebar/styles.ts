import { styled } from 'styles/theme';

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '$mediumBackground',
  height: '5rem',
  position: 'fixed',
  padding: '$4 $2',
  zIndex: 4,
  textAlign: 'center',
  width: '100%',
  transition: '$transitonTheme, border 0.35s ease',

  '@bp5': {
    width: '13rem',
    height: '100vh',
    flexDirection: 'column',
    borderRight: '2px solid $background',
  },
});
