import { styled } from 'features/ui/theme';

export const Header = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$gray50',
  fontFamily: 'Futura Std, sans-serif',
});

export const Title = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
  fontWeight: 650,

  '--fluid-type-min': '1.3rem',
  '--fluid-type-max': '2.6rem',
  '--fluid-type-target': '5vw',

  variants: {
    color: {
      primary: {
        backgroundImage: '$gradientGreen',
      },
      secondary: {
        backgroundImage: '$gradientYellow',
      },
      default: {
        backgroundImage: '$gradientGreen',
      },
    },
  },
});
