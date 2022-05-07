import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styles/theme';

export const AuthorLink = styled(Link, {});

export const AuthorContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  cursor: 'pointer',
  color: '$gray50',
  transition: '$transitonTheme',

  '.author': {
    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
    fontWeight: 500,
    paddingLeft: '$2',

    '@bp5': {
      paddingLeft: '0',
      paddingTop: '$2',
    },
  },

  '.description': {
    fontSize: 'clamp(0.6rem, 2vw, 0.9rem)',
    fontWeight: 300,
    paddingTop: '$2',
    textAlign: 'center',
    lineHeight: 1.3,
    display: 'none',

    strong: {
      fontWeight: 400,
    },
    '@bp5': {
      display: 'block',
    },
  },
  '@bp5': {
    flexDirection: 'column',
    paddingTop: '$3',
  },
});

export const AuthorImage = styled(Image, {
  objectFit: 'cover',
  borderRadius: '50%',
});
