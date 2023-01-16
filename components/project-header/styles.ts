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
  fontSize: 'clamp(1.5rem, 5vw, 2.3rem)',
  fontFamily: 'ABeeZee, sans-serif',
  letterSpacing: '-0.06em',
  backgroundImage: '$highlight01',
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
  fontWeight: 400,
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
