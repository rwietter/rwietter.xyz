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
    fontWeight: '700',
    color: '$gray50',
    fontFamily: 'Roboto Flex, sans-serif',
    fontFeatureSettings: '\'ss02\', \'ss03\', \'salt\' 1',
    fontVariantLigatures: 'common-ligatures',
    transition: '$transitonTheme',
  },

  h2: {
    fontSize: '$3',
    color: '$weakColorText',
    lineHeight: '1.5',
    paddingTop: '$2',
    letterSpacing: '-0.02em',
    fontFamily: 'Roboto Flex, sans-serif',
    fontFeatureSettings: '\'ss01\', \'ss02\', \'ss03\', \'salt\', \'ss04\' 1',
    fontVariantLigatures: 'common-ligatures',
    fontWeight: 200,
    transition: '$transitonTheme',

    '@bp2': {
      fontSize: '$5',
    },
  },
});

export const Link = styled('a', {
  color: '$gray50',
  display: 'inline-block',
  paddingTop: '$2',
  textDecoration: 'none',
  fontSize: '$2',
  transition: 'color 0.3s ease',

  variants: {
    social: {
      github: {
        '&:hover': {
          color: '333',
        },
      },
      linkedIn: {
        '&:hover': {
          color: '#0e76a8',
        },
      },
      twitter: {
        '&:hover': {
          color: '#1da1f2',
        },
      },
    },
  },
  '& + &': {
    paddingLeft: '$2',
  },
});
