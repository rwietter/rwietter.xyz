import { styled } from 'features/ui/theme';

export const ArticleFooterContainer = styled('div', {
  padding: '$6 1rem $2 1rem',
  color: '$gray50',
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
    color: '$gray50',
    textDecoration: 'none',
    transition: '$transitonTheme',
    display: 'flex',
    alignItems: 'center',
    '--fluid-type-max': '1.2rem',

    '&:hover': {
      color: '$primary',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '$transitonTheme',
    '&:hover': {
      color: '$primary',
    },
  },

  '@bp2': {
    flexDirection: 'row',
  },
});

export const Separator = styled('div', {
  width: '100%',
  height: '1px',
  background: '$gray200',
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
          color: '#999',
        },
      },
      substack: {
        '&:hover': {
          color: '#FF6719',
        },
      },
      linkedIn: {
        '&:hover': {
          color: '#0077b5',
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
