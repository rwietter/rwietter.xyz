import { styled } from '@stitches/react';

export const Article = styled('section', {
  fontFamily: 'Futura Std, sans-serif',
  maxWidth: '60rem',
  margin: '0 auto',
  contentVisibility: 'auto',
});

export const ArticleMarkdown = styled('article', {
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.2rem',
  '--fluid-type-target': '5vw',
  lineHeight: '1.7 !important',
  padding: '2rem 1.4rem',
  color: '$text_color',
  contentVisibility: 'auto',

  '@bp4': {
    '--fluid-type-max': '1.3rem',
  },

  p: {
    contentVisibility: 'auto',
  },
});
