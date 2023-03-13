import { styled } from 'styles/theme';

export const SocialContainer = styled('div', {
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  cursor: 'pointer',

  '@bp5': {
    display: 'flex',
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
