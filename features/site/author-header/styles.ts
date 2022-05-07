import { styled } from '../../../styles/theme';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  color: '$gray50',
  maxWidth: '35rem',
  padding: '$3 $2',
  transition: '$transitonTheme',
  '@bp3': {
    padding: '$5 $8 $2 $8',
  },

  h1: {
    fontSize: '$9',
    fontWeight: '900',
    color: '$gray50',
    transition: '$transitonTheme',
  },

  p: {
    fontSize: '$2',
    fontWeight: 400,
    color: '$weakColorText',
    lineHeight: '1.5',
    paddingTop: '$2',
    transition: '$transitonTheme',

    '@bp2': {
      fontSize: '$3',
    },
  },

  nav: {
    a: {
      color: '$gray50',
      display: 'inline-block',
      paddingTop: '$2',
      textDecoration: 'none',
      fontSize: '$2',
      transition: '$transitonTheme',

      '&:hover': {
        color: '$secondary',
      },
    },
    'a + a': {
      paddingLeft: '$2',
    },
  },
});
