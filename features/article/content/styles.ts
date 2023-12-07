import { styled } from 'features/ui/theme';

export const ArticleContainer = styled('div', {
  fontFamily: 'var(--font-inconsolata), monospace',
  maxWidth: '60rem',
  margin: '0 auto',
});

export const ArticleMarkdown = styled('article', {
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.2rem',
  '--fluid-type-target': '5vw',
  lineHeight: '1.7 !important',
  padding: '2rem 1.4rem',
  color: '$text_color',
  textAlign: 'justify',

  '@bp4': {
    '--fluid-type-max': '1.3rem',
  },
});
