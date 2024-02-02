import { styled } from 'features/ui/theme';

export const ArticleHeader = styled('section', {
  margin: '0 auto',
  maxWidth: '60rem',
  padding: '0 1.4rem',
  paddingBottom: '2rem',
  color: '$text_color',
  transition: '$transitonTheme',

  '@bp3': {
    paddingBottom: '2rem',
    paddingTop: '2rem',
  },
});

export const InfoHeader = styled('div', {
  '--fluid-type-max': '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontFamily: 'var(--font-primary), monospace',
  width: '100%',
  transition: '$transitonTheme',

  '& > div': {
    paddingTop: '$2',
  },

  '@bp2': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& > div': {
      paddingTop: 0,
    },
  },
});

export const BackToOverview = styled('button', {
  display: 'flex',
  fontFamily: 'var(--font-primary), monospace',
  width: 'fit-content',
  margin: 0,
  background: 'none',
  color: '$text_gray_color',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: '$transitonTheme',

  svg: {
    marginRight: '$2',
    transition: '$transitonTheme, transform 0.4s ease',
    willChange: 'transform',
  },

  '&:hover': {
    svg: {
      color: '$text_color',
      transform: 'translateX(-5px)',
    },
    p: {
      color: '$text_color',
      transition: '$transitonTheme',
    },
  },
});

export const DateTimeRead = styled('p', {
  '--fluid-type-max': '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'var(--font-primary), monospace',
  color: '$text_gray_color',
  transition: '$transitonTheme',

  svg: {
    marginRight: '$1',
  },
});

export const ArticleTitle = styled('h1', {
  '--fluid-type-max': '3.6rem',
  '--fluid-type-min': '1.3rem',
  '--fluid-type-target': '6vw',
  fontFamily: 'var(--font-secondary)',
  padding: 0,
  paddingTop: '$2',
  fontWeight: 800,
  margin: 0,
  lineHeight: 1.2,
  color: '$text_color',
  transition: '$transitonTheme',

  '@supports (text-wrap: balance)': {
    maxInlineSize: '50ch',
    textWrap: 'balance',
  },
});

export const ArticleDescription = styled('h2', {
  '--fluid-type-max': '1.3rem',
  '--fluid-type-target': '2vw',
  fontFamily: 'var(--font-primary), monospace',
  fontWeight: 400,
  lineHeight: '1.6em',
  padding: '$2 0',
  marginTop: '.5rem',
  color: '$text_gray_color',
  transition: '$transitonTheme',
});
