import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Futura Std, Roboto Flex, sans-serif',
    fontVariantLigatures: 'common-ligatures',
  },
  body: {
    background: 'var(--colors-background)',
    transition: '$transitonTheme',
    scrollBehavior: 'smooth',
  },
  'code, code span': {
    fontFamily: 'Fira Code, Consolas, Monaco !important',
    fontVariantLigatures: 'common-ligatures',
    fontFeatureSettings: '"ss01" 0',
    fontSize: 'clamp(0.9rem, 2vw, 1.15rem) !important',
  },
});
