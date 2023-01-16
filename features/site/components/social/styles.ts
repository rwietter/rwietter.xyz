import { styled } from 'styles/theme';

export const SocialContainer = styled('div', {
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  cursor: 'pointer',
  paddingTop: '$1',

  '@bp5': {
    display: 'flex',
  },
});

export const Link = styled('a', {
  color: '$gray50',
  display: 'inline-block',
  paddingTop: '$2',
  textDecoration: 'none',
  fontSize: '$2',
  transition: 'color 0.3s ease',

  variants: {
    social: {
      github: {
        '&:hover': {
          color: '333',
        },
      },
      linkedin: {
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
