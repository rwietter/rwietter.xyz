import { styled } from 'features/ui/theme';

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '60rem',
  margin: '0 auto',
  padding: '2rem 1rem 0 1rem',
  '@bp5': {
    padding: '4rem 1rem 0 1rem',
  },
});

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexFlow: 'wrap',
  fontWeight: 600,

  a: {
    color: '$text_alt_color',
    textDecoration: 'none',
    fontWeight: 400,
    paddingLeft: '0.4rem',
    position: 'relative',
    fontFamily: 'Futura Std, sans-serif',
    transition: '$transitonTheme',
    '--fluid-type-min': '1rem',
    '--fluid-type-max': '1.3rem',
    '--fluid-type-target': '2vw',
  },

  '@bp2': {
    flexFlow: 'nowrap',
    justifyContent: 'space-between',
  },
});

export const NavIterm = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  lineHeight: 1.8,

  '&:not(:last-child)': {
    marginRight: '1rem',
  },

  'a, svg': {
    color: '$sub_color !important',
  },

  '&.active a, &.active svg': {
    color: '$text_alt_color !important',
  },

  '&.active': {
    'a::after': {
      position: 'absolute',
      content: '',
      display: 'none',
      width: '8px',
      height: '8px',
      background: '$main_color',
      transition: '$transitonTheme',
      borderRadius: '50%',
      transform: 'translateX(-45%)',
      top: '-10px',
      right: '-10px',

      '@bp2': {
        display: 'inline-block',
      },
    },
  },

  '@bp2': {
    lineHeight: 'initial',
  },
});

export const Button = styled('button', {
  background: 'none',
  display: 'none',
  color: '$text_color',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: '$transitonTheme',
  fontFamily: 'Roboto Flex, sans-serif',

  '@bp1': {
    display: 'flex',
    alignItems: 'center',
  },

  '&:hover': {
    color: '$main_color',
  },
});
