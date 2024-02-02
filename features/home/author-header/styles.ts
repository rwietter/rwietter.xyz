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
    fontWeight: 900,
    color: '$text_color',
    fontFamily: 'var(--font-secondary), monospace',
    transition: '$transitonTheme',
    '--fluid-type-min': '1.4rem',
    '--fluid-type-max': '4.5rem',
    '--fluid-type-target': '12vw',
  },

  h2: {
    color: '$text_color',
    lineHeight: '1.5',
    paddingTop: '$1',
    fontFamily: 'var(--font-primary), monospace',
    fontWeight: 300,
    transition: '$transitonTheme',
    '--fluid-type-min': '1rem',
    '--fluid-type-max': '1.2rem',
  },

  span: {
    color: '$text_color',
    fontFamily: 'var(--font-primary), monospace',
    fontWeight: 200,
    padding: '.2rem 0',
    transition: '$transitonTheme',
    '--fluid-type-max': '1.2rem',
  },
});

export const SocialContainer = styled('div', {
  paddingTop: '$2',
});
