import { keyframes } from '@stitches/react';
<<<<<<< HEAD
import { styled } from 'features/ui/theme';
=======
import { styled } from 'src/domains/ui/theme';
>>>>>>> 145ecd6 (refactor: rsc)

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
  color: '$gray50',
  fontWeight: 600,

  a: {
    color: '$gray50',
    textDecoration: 'none',
    fontWeight: 200,
    paddingLeft: '0.4rem',
    position: 'relative',
    fontFamily: 'Futura Std, sans-serif',
    transition: 'color 0.2s ease',
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
    color: '$weakColorText !important',
  },

  '&.active a, &.active svg': {
    color: '$gray50 !important',
  },

  '&.active': {
    'a::after': {
      position: 'absolute',
      content: '',
      display: 'none',
      width: '8px',
      height: '8px',
      background: '$primary',
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

const clickScaleAnimation = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

export const DarkMode = styled('button', {
  background: 'none',
  display: 'none',
  color: '$gray50',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Roboto Flex, sans-serif',

  '@bp1': {
    display: 'flex',
    alignItems: 'center',
  },

  '& svg.dark, & svg.light': {
    animation: `${clickScaleAnimation} 300ms linear`,
  },
});
