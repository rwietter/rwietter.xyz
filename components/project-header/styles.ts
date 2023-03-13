import { styled } from 'styles/theme';

export const Header = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$gray50',
  fontFamily: 'Futura Std, sans-serif',
});

export const Title = styled('h1', {
  backgroundImage: '$gradientGreen',
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
  fontWeight: 600,
  padding: '0 1rem',

  '--fluid-type-min': '1.2rem',
  '--fluid-type-max': '2.5rem',
  '--fluid-type-target': '5vw',
});

export const Subtitle = styled('p', {
  fontSize: '1.2rem',
  paddingTop: '1rem',
  fontFamily: 'Roboto Flex, sans-serif',
  letterSpacing: '-0.02em',
  textAlign: 'center',

  '@bp3': {
    fontSize: '1.5rem',
  },
});
