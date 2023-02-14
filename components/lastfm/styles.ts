import { styled } from 'styles/theme';

const ellipsis = {
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  width: '100%',
  maxWidth: 'calc(100% - 60px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

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
  width: '100%',
  maxWidth: '400px',
  overflow: 'hidden',
  '&:hover': {
    cursor: 'pointer',
  },
  '@bp1': {
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
    '--fluid-type-min': '0.9rem',
    '--fluid-type-max': '1rem',
    '--fluid-type-target': '0.8vw',
    '&:hover': {
      color: '$primary',
    },
    strong: {
      all: 'unset',
      paddingLeft: '.2rem',
      ...ellipsis,
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
    letterSpacing: '0.02em',
    marginLeft: '.5rem',
    ...ellipsis,
    '--fluid-type-max': '1.05rem',
    '--fluid-type-target': '0.8vw',
  },
});
