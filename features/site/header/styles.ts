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
    'a::after': {
      position: 'absolute',
      content: '',
      borderBottom: '1px solid $gray50',
      width: '70%',
      transform: 'translateX(-45%)',
      bottom: '-8px',
      left: '50%',
    },
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
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
    fontWeight: 200,
    position: 'relative',
    transition: 'color 0.2s ease',
    fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
  },
});

export const DarkMode = styled('button', {
  background: 'none',
  display: 'none',
  color: '$gray50',
  outline: 'none',
  width: '2.3rem',
  height: '2.3rem',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Roboto Flex, sans-serif',

  '@bp1': {
    display: 'flex',
  },
});
