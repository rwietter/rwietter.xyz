import { createStitches } from '@stitches/react';

export type AvailableThemes = 'arch' | 'blueberry-light' | 'catppuccin' | 'chaos-theory'

type ThemeList = {
  name: AvailableThemes;
  colors: string[];
  background: string;
};

export const themeList: ThemeList[] = [
  {
    name: 'arch',
    colors: ['#0c0d11', '#f6f5f5', '#7ebab5'],
    background: '#000000',
  },
  {
    name: 'blueberry-light',
    colors: ['#dae0f5', '#678198', '#506477'],
    background: '#f6f5f5',
  },
  {
    name: 'catppuccin',
    colors: ['#1e1e2e', '#CECEE6', '#abe9b3'],
    background: '#000000',
  },
  {
    name: 'chaos-theory',
    colors: ['#141221', '#dde5ed', '#fd77d7'],
    background: '#000000',
  },
];

const {
  theme: archTheme,
  styled,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      bg_color: '#0c0d11',
      bg_alt_color: '#080808',
      text_color: '#f6f5f5',
      text_alt_color: '#FFFFFF',
      caret_color: '#7ebab5',
      main_color: '#7ebab5',
      sub_color: '#454864',
      sub_alt_color: '#171a25',
      error_color: '#ff4754',
    },
    space: {
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2.0rem',
      6: '2.4rem',
      7: '3.0rem',
      8: '3.6rem',
      9: '4.4rem',
      10: '5.2rem',
    },
    transitions: {
      transitonTheme: 'color 300ms ease, background 300ms ease',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 620px)',
    bp3: '(min-width: 720px)',
    bp4: '(min-width: 970px)',
    bp5: '(min-width: 1100px)',
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    textGradient: (value: string) => ({
      background: value,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }),
  },
});

const { theme: blueberryLight } = createStitches({
  theme: {
    colors: {
      bg_color: '#dae0f5',
      bg_alt_color: '#f5f5f5',
      text_color: '#678198',
      text_alt_color: '#506477',
      caret_color: '#df4576',
      main_color: '#506477',
      sub_color: '#92a4be',
      sub_alt_color: '#c1c7df',
      error_color: '#df4576',
    },
  },
});

const { theme: catppuccinDark } = createStitches({
  theme: {
    colors: {
      bg_color: '#1e1e2e',
      bg_alt_color: '#232335',
      text_color: '#d9e0ee',
      text_alt_color: '#EEEEF6',
      caret_color: '#fae3b0',
      main_color: '#abe9b3',
      sub_color: '#645F79',
      sub_alt_color: '#292739',
      error_color: '#f28fad',
    },
  },
});

const { theme: chaosTheory } = createStitches({
  theme: {
    colors: {
      bg_color: '#141221',
      bg_alt_color: '#232335',
      text_color: '#dde5ed',
      text_alt_color: '#EEEEF6',
      caret_color: '#dde5ed',
      main_color: '#fd77d7',
      sub_color: '#676e8a',
      sub_alt_color: '#1e1d2f',
      error_color: '#ff5869',
    },
  },
});

export {
  archTheme,
  blueberryLight,
  chaosTheory,
  catppuccinDark,
  styled,
  getCssText,
};
