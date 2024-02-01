import { styled } from 'features/ui/theme';

const ellipsis = {
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  width: '100%',
  maxWidth: '200px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

export const Img = styled('img', {
  width: '100%',
});

export const Playing = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  border: '1px solid $sub_alt_color',
  borderRadius: '8px',
  marginTop: '.7rem',
  transition: '$transitonTheme, border 0.3s ease',
  width: '100%',
  maxWidth: '400px',
  overflow: 'hidden',
  cursor: 'pointer',
  '@bp1': {
    minWidth: '380px',
  },
});

export const PlayingArtist = styled('div', {
  paddingLeft: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  paddingTop: '1rem',
  color: '$text_color',
  transition: '$transitonTheme',

  '.play a': {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    color: '$text_color',
    paddingTop: '.5rem',
    transition: '$transitonTheme',
    fontFamily: 'var(--font-primary), monospace',
    '--fluid-type-min': '0.9rem',
    '--fluid-type-max': '1rem',
    '--fluid-type-target': '0.8vw',
    '&:hover': {
      color: '$main_color',
    },
    '.artist': {
      all: 'unset',
      paddingLeft: '.2rem',
      ...ellipsis,
    },
  },

  '.song': {
    all: 'unset',
    paddingLeft: '.2rem',
    fontFamily: 'var(--font-primary), monospace',
    ...ellipsis,
  },

  '@bp1': {
    maxWidth: '100%',
  },
});

export const PlayingSpot = styled('div', {
  display: 'flex',
  alignItems: 'center',

  span: {
    fontFamily: 'var(--font-primary), monospace',
    letterSpacing: '0.02em',
    marginLeft: '.5rem',
    ...ellipsis,
    '--fluid-type-max': '1.05rem',
    '--fluid-type-target': '0.8vw',
  },
});
