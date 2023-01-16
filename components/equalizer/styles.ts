import { styled as s, keyframes } from 'styles/theme';

export const EqualizerContainer = s('div', {
  minWidth: '100px',
});

const frameColor = keyframes({
  '25%': {
    background: '#74ebd5',
  },
  '50%': {
    height: '1px',
    background: '#c1b',
  },
  '75%': {
    background: '#fb377f',
  },
});

const elementAnimation = (animation: number, height: number = 50) => ({
  position: 'relative',
  width: '10px',
  display: 'inline-block',
  '&::before': {
    position: 'absolute',
    content: '""',
    display: 'block',
    height: `${height}px`,
    width: '18px',
    background: '$secondary',
    animation: `${frameColor} 1.5s infinite ease-in-out`,
    bottom: '0',
    borderTopRightRadius: '40px',
    borderTopLeftRadius: '40px',
    animationDelay: `${animation}s`,
  },
});

export const EqualizerBar = s('div', {
  ...elementAnimation(0, 40),
});

export const DelayShort = s('div', {
  ...elementAnimation(0.25, 60),
});

export const DelayLong = s('div', {
  ...elementAnimation(0.50, 50),
});

export const DelayReallyLong = s('div', {
  ...elementAnimation(0.75, 40),
});
