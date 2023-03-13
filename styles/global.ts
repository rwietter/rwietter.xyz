import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontVariantLigatures: 'common-ligatures',
    scrollbarWidth: 'auto',
    scrollbarColor: '#ff80bf #151417',
  },
  '::-webkit-scrollbar': {
    width: '0.3rem',
    height: '0.5rem',
  },
  '::-webkit-scrollbar-track': {
    background: '#151417',
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '50rem',
    background: '#ff80bf',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: '#ff80bf',
  },
  body: {
    background: 'var(--colors-background)',
    transition: '$transitonTheme',
    scrollBehavior: 'smooth',
  },
});
