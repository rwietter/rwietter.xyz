import { styled } from 'features/ui/theme';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  color: '$text_color',
  maxWidth: '45rem',
  padding: '$3 0',
  transition: '$transitonTheme',
  '@bp3': {
    padding: '$2 0 $2 0',
  },

  h1: {
    fontWeight: '700',
    color: '$text_color',
    fontFamily: 'var(--font-inconsolata), monospace',
    transition: '$transitonTheme',
    fontVariant: 'common-ligatures',
    '--fluid-type-min': '1.2rem',
    '--fluid-type-max': '3.5rem',
    '--fluid-type-target': '8vw',
  },

  h2: {
    color: '$text_color',
    lineHeight: '1.5',
    paddingTop: '$1',
    fontFamily: 'var(--font-inconsolata), monospace',
    fontWeight: 200,
    transition: '$transitonTheme',
    '--fluid-type-min': '1rem',
    '--fluid-type-max': '1.1rem',

    '@bp3': {
      '--fluid-type-max': '1.3rem',
    },
  },
});

export const SocialContainer = styled('div', {
  paddingTop: '$2',
});
