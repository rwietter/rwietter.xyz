import { styled as s } from 'styles/theme';

export const ArticleFooterContainer = s('div', {
  padding: '$9 0 $2 0',
  color: '$gray50',
});

export const NavHeader = s('nav', {
  display: 'flex',
  padding: '$2 0',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  flexDirection: 'column',
  lineHeight: '2',

  a: {
    color: '$gray50',
    textDecoration: 'none',
    transition: '$transitonTheme',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid transparent',

    '&:hover': {
      color: '$primary',
      borderBottom: '3px solid $primary',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    transition: '$transitonTheme',
    '&:hover': {
      color: '$primary',
      borderBottom: '3px solid $primary',
    },
  },

  '@bp2': {
    flexDirection: 'row',
  },
});

export const Separator = s('div', {
  width: '100%',
  height: '3px',
  background: '$mediumBackgroundHover',
  transition: '$transitonTheme',
});

export const SocialContainer = s('div', {
  padding: '$4 0 $2 0',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  a: {
    color: '$gray50',
    transition: '$transitonTheme',
    '&:hover': {
      color: '$primary',
    },
  },
  'a + a': {
    marginLeft: '$2',
  },

  h4: {
    fontSize: '$2',
    fontWeight: 400,

    strong: {
      fontWeight: 600,
    },
  },
});
