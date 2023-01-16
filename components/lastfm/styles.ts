import { styled } from 'styles/theme';

export const Img = styled('img', {
  width: '100%',
});

export const Playing = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '6rem',
  border: '1px solid $gray400',
  borderRadius: '4px',
  marginTop: '$1',
  transition: '$transitonTheme, border 0.3s ease',
  '&:hover': {
    cursor: 'pointer',
  },
  '@bp3': {
    minWidth: '380px',
  },
});

export const PlayingArtist = styled('div', {
  paddingLeft: '2.5rem',
  paddingRight: '.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  paddingTop: '$2',
  alignSelf: 'flex-start',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  color: '$gray50',
  transition: '$transitonTheme',

  p: {
    wordBreak: 'break-word',
  },

  '.play a': {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    color: '$gray50',
    paddingTop: '1rem',
    transition: '$transitonTheme',
    '&:hover': {
      color: '$primary',
    },
    strong: {
      all: 'unset',
      paddingLeft: '.2rem',
      textDecoration: 'none',
    },
  },

  '@bp1': {
    maxWidth: '100%',
  },
});

export const PlayingImage = styled('div', {
  width: '60px',
  alignSelf: 'flex-end',
});

export const PlayingSpot = styled('div', {
  display: 'flex',
  alignItems: 'center',

  span: {
    fontFamily: 'Roboto Flex, sans-serif',
    fontSize: '1.1rem',
    letterSpacing: '0.02em',
    marginLeft: '.5rem',
  },
});
