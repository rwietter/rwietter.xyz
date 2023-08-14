import { styled } from 'features/ui/theme';

export const ArticleFooterContainer = styled('div', {
  padding: '$6 1rem $2 1rem',
  color: '$text_alt_color',
  maxWidth: '60rem',
  margin: '0 auto',
  fontFamily: 'Futura Std, sans-serif',
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
      color: '$text_alt_color',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '$transitonTheme',
    '&:hover': {
      color: '$text_alt_color',
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
  padding: '$4 0 5rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  h4: {
    fontSize: '$2',
    fontWeight: 400,
    '--fluid-type-max': '1.3rem',
    '--fluid-type-target': '1vw',

    strong: {
      fontWeight: 600,
    },
  },
});
