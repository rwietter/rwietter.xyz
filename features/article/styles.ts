import { styled } from 'features/ui/theme';

export const ArticleContainer = styled('section', {
  backgroundColor: '$bg_color',
  transition: '$transitonTheme',
});

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  backgroundPosition: 'center',
});

export const ArticleImage = styled('div', {
  position: 'relative',
  width: '100%',
  height: '15rem',
  backgroundPosition: 'center',
  objectFit: 'cover',

  '@bp3': {
    height: '25rem',
  },
});

export const ImageCredit = styled('p', {
  '--fluid-type-max': '1rem',
  textAlign: 'center',
  fontFamily: 'var(--font-inconsolata), monospace',
  position: 'relative',
  paddingTop: '.5rem',
  filter: 'brightness(0.7)',
  color: '$text_color',
  transition: '$transitonTheme',
});

export const ArticleMarkdownContainer = styled('section', {
  width: '100%',
  paddingTop: '$3',
  margin: '0 auto',
});
