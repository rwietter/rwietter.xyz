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
    padding: '$2 $8 $2 $8',
  },

  h1: {
    fontSize: '$9',
    fontWeight: '700',
    color: '$gray50',
    fontFamily: 'Roboto Flex, sans-serif',
    fontFeatureSettings: '"ss02" on, "ss03" on, "salt" on, "ss04" on',
    fontVariantLigatures: 'common-ligatures',
    transition: '$transitonTheme',
  },

  h2: {
    fontSize: '$4',
    color: '$weakColorText',
    lineHeight: '1.5',
    paddingTop: '$1',
    letterSpacing: '-0.02em',
    fontFamily: 'Roboto Flex, sans-serif',
    fontFeatureSettings: '"ss01" on, "ss02" on, "ss03" on, "salt" on, "ss04" on',
    fontVariantLigatures: 'common-ligatures',
    fontWeight: 200,
    transition: '$transitonTheme',

    '@bp2': {
      fontSize: '$4',
    },
  },
});

export const SocialContainer = styled('div', {
  paddingTop: '$2',
});
