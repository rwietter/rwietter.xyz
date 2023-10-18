import { createStitches } from '@stitches/react';

export type AvailableThemes = 'dark' | 'light'

const {
  theme: dark,
  styled,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      bg_color: '#0c0d11',
      bg_alt_color: '#080808',
      text_color: '#f6f5f5',
      text_alt_color: '#FFFFFF',
      caret_color: '#44475a',
      main_color: '#ffb86c',
      sub_color: '#454864',
      sub_alt_color: '#171a25',
      error_color: '#ff4754',

      cb_bg_color: 'rgba(0, 0, 0, 0.2)',
      cb_box_alt_color: 'rgba(255, 255, 255, 0.1)',
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

const {
  theme: light,
} = createStitches({
  theme: {
    colors: {
      bg_color: '#FFFFFF',
      bg_alt_color: '#F2F3F7',
      text_color: '#0c0d11',
      text_alt_color: '#080808',
      caret_color: '#0c0d11',
      main_color: '#8338ec',
      sub_color: '#C9C9CF',
      sub_alt_color: '#F4F4F6',
      error_color: '#ff4754',

      cb_bg_color: 'rgba(255, 255, 255, 0.2)',
      cb_box_alt_color: 'rgba(0, 0, 0, 0.1)',
    },
  },
});

export {
  dark,
  light,
  styled,
  getCssText,
};
