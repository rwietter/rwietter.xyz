import { styled } from 'styles/theme';

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '57.6rem',
  margin: '0 auto',
  fontSize: '1.4rem',
  paddingRight: '.5rem',
  paddingTop: '1.5rem',

  '@bp5': {
    padding: '6rem 0 0 0',
  },
});

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$gray50',
  fontWeight: 200,
  'div.active': {
    a: {
      color: '$textHighlight',
    },
  },

  a: {
    color: '$gray50',
    textDecoration: 'none',
    padding: '0 1rem',
    letterSpacing: '-0.06em',
    fontWeight: 200,
    position: 'relative',
    transition: 'color 0.2s ease',
  },
});

export const DarkMode = styled('button', {
  background: 'none',
  color: '$gray50',
  outline: 'none',
  width: '2.3rem',
  height: '2.3rem',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Roboto Flex, sans-serif',
});
