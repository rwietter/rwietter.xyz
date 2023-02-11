import { styled } from 'styles/theme';

export const Header = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 0 3rem 0',
  color: '$gray50',
});

export const Title = styled('h1', {
  fontFamily: 'ABeeZee, sans-serif',
  letterSpacing: '-0.06em',
  backgroundImage: '$highlight01',
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
  fontWeight: 400,
  padding: '0 1rem',

  '--fluid-type-min': '1.4rem',
  '--fluid-type-max': '2rem',
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
