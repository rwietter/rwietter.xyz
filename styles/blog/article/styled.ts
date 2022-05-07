import Image from 'next/image';
import { styled as s } from 'styles/theme';
import ReactMarkdown from 'react-markdown';

export const ArticleContainer = s('div', {
  padding: '0 $2 $7 $2',
  '@media (min-width: 1100px) and (max-width: 1200px)': {
    padding: '0 0 $7 $10',
  },
});

export const ArticleImage = s(Image, {
  borderRadius: '4px',
});

export const ArticleHeader = s('div', {
  color: '$gray50',
});

export const BackToOverview = s('span', {
  color: '$gray50',
  paddingBottom: '$5',
  display: 'flex',
  cursor: 'pointer',

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

export const DateTimeRead = s('span', {
  color: '$gray50',
  paddingBottom: '$3',
  display: 'flex',
  fontSize: '0.9rem',

  svg: {
    marginRight: '$1',
  },
});

export const ArticleTitle = s('h1', {
  color: '$gray50',
  fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
  fontWeight: 900,
});

export const ArticleDescription = s('p', {
  color: '$gray50',
  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
  fontWeight: 400,
  padding: '$2 0',
});

export const ArticleMarkdownContainer = s('div', {
  margin: '0 auto',
  width: '100%',
  paddingTop: '$5',
});

export const ArticleMarkdown = s(ReactMarkdown, {
  paddingTop: '$6',
  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
  lineHeight: '1.8',
  fontFamily: 'Sora, sans-serif',
});
