import { styled } from 'features/ui/theme';

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '57.6rem',
  margin: '0 auto',
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
      width: '8px',
      height: '8px',
      background: '$primary',
      borderRadius: '50%',
      transform: 'translateX(-45%)',
      top: '-10px',
      right: '-10px',
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
  },

  a: {
    color: '$gray50',
    paddingLeft: '0.4rem',
    textDecoration: 'none',
    fontWeight: 200,
    position: 'relative',
    fontFamily: 'Futura Std, sans-serif',
    transition: 'color 0.2s ease',
    '--fluid-type-min': '1rem',
    '--fluid-type-max': '1.3rem',
    '--fluid-type-target': '2vw',
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
