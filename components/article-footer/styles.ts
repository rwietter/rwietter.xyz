import { styled as s, styled } from 'styles/theme';

export const ArticleFooterContainer = s('div', {
  padding: '$6 0 $2 0',
  color: '$gray50',
  maxWidth: '60rem',
  margin: '0 auto',
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
    '--fluid-type-max': '1.3rem',

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
  height: '2px',
  background: '$gray200',
  transition: '$transitonTheme',
});

export const SocialContainer = s('section', {
  padding: '$4 0 5rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  h4: {
    fontSize: '$2',
    fontWeight: 400,
    '--fluid-type-max': '1.5rem',
    '--fluid-type-target': '1vw',

    strong: {
      fontWeight: 600,
    },
  },
});

export const Link = styled('a', {
  color: '$gray50',
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: '$2',
  transition: 'color 0.3s ease',

  variants: {
    social: {
      github: {
        '&:hover': {
          color: 'rgba(255, 255, 255, 0.6)',
        },
      },
      linkedIn: {
        '&:hover': {
          color: '#0e76a8',
        },
      },
      twitter: {
        '&:hover': {
          color: '#1da1f2',
        },
      },
    },
  },
  '& + &': {
    paddingLeft: '$2',
  },
});
