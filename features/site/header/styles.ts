import { styled } from 'styles/theme';

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '57.6rem',
  margin: '0 auto',
  fontSize: '1.6rem',
  padding: '2rem 1rem 0 1rem',

  '@bp5': {
    padding: '4rem 0 0 0',
  },
});

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$gray50',
  fontWeight: 600,
  'div.active': {
    a: {
      color: '$textHighlight',
    },
    svg: {
      fill: '$textHighlight',
    },
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  'div + div': {
    paddingLeft: '1.3rem',

    '@bp3': {
      paddingLeft: '2.3rem',
    },
  },

  a: {
    color: '$gray50',
    paddingLeft: '0.4rem',
    textDecoration: 'none',
    letterSpacing: '-0.06em',
    fontWeight: 300,
    position: 'relative',
    transition: 'color 0.2s ease',
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
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
