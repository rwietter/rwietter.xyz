import { styled } from 'features/ui/theme';

export const ArticleFooterContainer = styled('div', {
  padding: '$6 1rem $2 1rem',
  color: '$text_alt_color',
  maxWidth: '60rem',
  margin: '0 auto',
  fontFamily: 'var(--font-space-grotesk), monospace',
});

export const NavHeader = styled('nav', {
  display: 'flex',
  padding: '$2 0',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  flexDirection: 'column',
  lineHeight: '2',

  a: {
    color: '$text_color',
    textDecoration: 'none',
    transition: '$transitonTheme',
    display: 'flex',
    alignItems: 'center',
    '--fluid-type-max': '1.2rem',

    '&:hover': {
      color: '$main_color',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '$transitonTheme',
    '&:hover': {
      color: '$main_color',
    },
  },

  '@bp2': {
    flexDirection: 'row',
  },
});

export const Separator = styled('div', {
  width: '100%',
  height: '1px',
  background: '$sub_color',
  transition: '$transitonTheme',
});

export const SocialContainer = styled('section', {
  padding: '2rem 0 5rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  h4: {
    fontWeight: 400,
    paddingTop: '1rem',
    '--fluid-type-min': '1.2rem',
    '--fluid-type-max': '1.3rem',
    '--fluid-type-target': '1vw',

    '@media (min-width: 23.7em)': {
      paddingTop: 0,
    },

    strong: {
      fontWeight: 600,
    },
  },
});

export const License = styled('a', {
  color: '$text_color',
  textDecoration: 'none',
  transition: '$transitonTheme',
  paddingRight: '1rem',
  '--fluid-type-max': '1rem',

  '&:hover': {
    color: '$main_color',
    textDecoration: 'underline',
  },
});
