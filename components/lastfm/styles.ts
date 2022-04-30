import { styled } from 'styles/theme';

export const Playing = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  background: '$mediumBackground',
  padding: '0 $1',
  minHeight: '6rem',
  marginTop: '$1',
  width: '100%',
  transition: '$transitonTheme, transform 0.3s ease',
  willChange: 'scale',
  '&:hover': {
    transform: 'scale(1.02)',
    cursor: 'pointer',
  },
  '@bp3': {
    minWidth: '380px',
  },
});

export const PlayingArtist = styled('div', {
  paddingLeft: '$2',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  paddingTop: '$2',
  alignSelf: 'flex-start',
  width: '100%',
  color: '$gray50',
  transition: '$transitonTheme',

  p: {
    paddingTop: '$1',
    wordBreak: 'break-word',
  },

  '@bp1': {
    p: {
      paddingTop: '0',
      paddingLeft: '$1',
    },
    flexDirection: 'row',
    maxWidth: '100%',
  },
});

export const PlayingImage = styled('div', {
  height: 'fit-content',
});
