import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontVariantLigatures: 'common-ligatures',
  },
  '::-webkit-scrollbar': {
    width: '0.5rem',
    height: '0.6rem',
  },
  '::-webkit-scrollbar-track': {
    background: 'var(--colors-gray300)',
    transition: 'background 350ms ease 0s',
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '50rem',
    background: 'var(--colors-scrollbar)',
    transition: 'background 350ms ease 0s',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: 'var(--colors-scrollbar)',
    transition: 'background 350ms ease 0s',
  },
  body: {
    background: 'var(--colors-background)',
    transition: '$transitonTheme',
    scrollBehavior: 'smooth',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
  },
});
