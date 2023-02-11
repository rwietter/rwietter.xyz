import { styled } from '../../../styles/theme';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  color: '$gray50',
  maxWidth: '45rem',
  padding: '$3 $2',
  transition: '$transitonTheme',
  '@bp3': {
    padding: '$2 $8 $2 $8',
  },

  h1: {
    fontWeight: '700',
    color: '$gray50',
    fontFamily: 'Roboto Flex, sans-serif',
    transition: '$transitonTheme',
    '--fluid-type-min': '1.5rem',
    '--fluid-type-max': '3.5rem',
    '--fluid-type-target': '10vw',
  },

  h2: {
    color: '$weakColorText',
    lineHeight: '1.5',
    paddingTop: '$1',
    letterSpacing: '-0.02em',
    fontFamily: 'Futura Std, sans-serif',
    fontWeight: 200,
    transition: '$transitonTheme',
    '--fluid-type-min': '1.1rem',
    '--fluid-type-max': '1.6rem',

    '@bp2': {
      fontSize: '$4',
    },
  },
});

export const SocialContainer = styled('div', {
  paddingTop: '$2',
});
