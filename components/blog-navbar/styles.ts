import { styled } from 'styles/theme';

export const NavItems = styled('nav', {
  width: '100%',
  minHeight: '3.5rem',
  color: '$gray50',
  transition: '$transitonTheme, border .4s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '2px solid $background',
  background: '$mediumBackgroundHover',

  '@bp5': {
    background: '$mediumBackground',
  },

  li: {
    listStyle: 'none',
  },

  'li + li': {
    paddingLeft: '$2',

    '@bp2': {
      paddingLeft: '0',
    },
  },

  'li a': {
    textDecoration: 'none',
    color: '$textHighlight',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    transition: '$transitonTheme',
    padding: '0',
    borderRadius: '50px',

    '@bp2': {
      padding: '$1 $4',
    },

    '&:hover': {
      color: '$textHighlight',
      background: '$mediumBackgroundHover',
    },
  },
});
