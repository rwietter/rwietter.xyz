import Image from 'next/image';
import { styled as s } from 'styles/theme';
import ReactMarkdown from 'react-markdown';

export const ArticleContainer = s('section', {
  width: '100%',
  maxWidth: '57rem',
  margin: '0 auto',
  padding: '0 1rem',
});

export const ArticleImage = s(Image, {
  borderRadius: '4px',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  backgroundPosition: 'center',
});

export const ArticleHeader = s('section', {
  color: '$gray50',
  paddingBottom: '2rem',
});

export const BackToOverview = s('button', {
  background: 'none',
  border: 'none',
  outline: 'none',
  margin: 0,
  color: '$gray50',
  paddingBottom: '$5',
  display: 'flex',
  cursor: 'pointer',
  fontSize: '$3',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontFamily: 'Roboto Flex, sans-serif',

  svg: {
    marginRight: '$1',
    transition: '$transitonTheme, transform 0.4s ease',
    willChange: 'transform',
  },
  '&:hover': {
    svg: {
      transform: 'translateX(-5px)',
      color: '$primary',
    },
    p: {
      transition: '$transitonTheme',
      color: '$primary',
    },
  },
});

export const DateTimeRead = s('p', {
  color: '$gray50',
  paddingBottom: '$3',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.1rem',
  fontFamily: 'Roboto Flex, sans-serif',

  svg: {
    marginRight: '$1',
  },
});

export const ArticleTitle = s('h1', {
  all: 'unset',
  color: '$gray50',
  fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
  lineHeight: '1.2',
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif',
});

export const ArticleDescription = s('h2', {
  color: '$gray50',
  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
  fontWeight: 400,
  padding: '$2 0',
  marginTop: '.5rem',
  fontFamily: 'Futura Std, sans-serif',
});

export const ArticleMarkdownContainer = s('section', {
  margin: '0 auto',
  width: '100%',
  paddingTop: '$5',
});

export const Article = s('article', {
  fontFamily: 'Futura Std, sans-serif',
});

export const ArticleMarkdown = s(ReactMarkdown, {
  paddingTop: '$6',
  fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
  lineHeight: '1.8',
});
