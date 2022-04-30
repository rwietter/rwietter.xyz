import { styled } from 'styles/theme';

export const LastPostContainerLink = styled('div', {
  width: '100%',
  padding: '$3 $2',
  marginTop: '$7',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  '@bp3': {
    padding: '$5 $8 $2 $8',
  },
});

export const LastPostContainerDescription = styled('div', {
  width: '100%',
  transition: '$transitonTheme',
  color: '$gray50',
  h2: {
    fontSize: '$6',
    fontWeight: 900,
    '@bp2': {
      fontSize: '$8',
    },
  },
  p: {
    fontSize: '$2',
    fontWeight: 400,
    lineHeight: '1.5',
    margin: '$1 0 $4 0',

    '@bp2': {
      fontSize: '$3',
    },
  },
});

export const LastPostContainer = styled('section', {
  display: 'flex',
  background: '$mediumBackground',
  padding: '$4 $2',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  transition: '$transitonTheme, transform 0.7s, box-shadow 0.3s ease',
  '& + &': {
    marginTop: '$3',
  },
  '&:hover': {
    transform: 'translateX(0.5rem)',
  },
});

export const LastPostContainerImage = styled('div', {
  paddingRight: '$2',
  display: 'none',
  'span img': {
    borderRadius: '50%',
    width: 40,
    height: 40,
    objectFit: 'cover',
    position: 'relative !important',
  },
  '@bp3': {
    display: 'flex',
  },
});

export const LastPostToBlog = styled('button', {
  outline: 'none',
  marginTop: '$4',
  border: 'none',
  width: '8rem',
  height: '2.5rem',
  borderRadius: '4px',
  background: '$secondary',
  transition: 'background 0.3s ease',
  fontWeight: '600',

  '&:hover': {
    background: '$primary',
  },

  a: {
    textDecoration: 'none',
    padding: '$1 $2',
    color: '$white',
  },
});

export const LastPostContainerContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: '$gray50',
  transition: '$transitonTheme',
  '.title': {
    fontSize: '$3',
  },
  '.description': {
    fontSize: '$2',
    paddingTop: '$1',
    fontWeight: 300,
    maxWidth: '34rem',
    whiteSpace: 'wrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '@bp3': {
    '.title': {
      fontSize: '$3',
    },
    '.description': {
      fontSize: '$2',
    },
  },
});

export const LastPostContainerContentCategory = styled('div', {
  fontSize: '$1',
  marginTop: '$3',
  maxWidth: 'min-content',
  color: '$white',
  padding: '0.2rem 0.6rem',
  borderRadius: '4px',
  transition: '$transitonTheme',
  fontWeight: 700,

  variants: {
    category: {
      news: {
        background: '$primary',
      },
      tech: {
        background: '$secondary',
      },
      food: {
        background: '$tertiary',
      },
      nature: {
        background: '$danger',
      },
      story: {
        background: '$google',
      },
    },
  },
});
