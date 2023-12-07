import { styled } from 'features/ui/theme';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const ArticleContainer = styled('section', {
  backgroundColor: '$bg_color',
  transition: '$transitonTheme',
});

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  backgroundPosition: 'center',
});

export const ArticleImage = styled(Image, {
  position: 'relative',
  width: '100%',
  height: '100%',
  maxHeight: '30rem',
  backgroundPosition: 'center',
  objectFit: 'cover',
});

export const ImageCredit = styled('p', {
  '--fluid-type-max': '1rem',
  textAlign: 'center',
  fontFamily: 'var(--font-inconsolata), monospace',
  position: 'relative',
  paddingTop: '.5rem',
  filter: 'brightness(0.7)',
  color: '$text_color',
  transition: '$transitonTheme',
});

export const ArticleHeader = styled('section', {
  margin: '0 auto',
  maxWidth: '60rem',
  padding: '0 1.4rem',
  paddingBottom: '2rem',
  color: '$text_color',
  transition: '$transitonTheme',

  '@bp3': {
    paddingBottom: '2rem',
    paddingTop: '2rem',
  },
});

export const InfoHeader = styled('div', {
  '--fluid-type-max': '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontFamily: 'var(--font-inconsolata), monospace',
  width: '100%',
  color: '$sub_color',
  transition: '$transitonTheme',

  '& > div': {
    paddingTop: '$2',
  },

  '@bp2': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& > div': {
      paddingTop: 0,
    },
  },
});

export const BackToOverview = styled('button', {
  display: 'flex',
  fontFamily: 'var(--font-inconsolata), monospace',
  width: 'fit-content',
  margin: 0,
  background: 'none',
  color: '$text_color',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: '$transitonTheme',

  svg: {
    marginRight: '$2',
    transition: '$transitonTheme, transform 0.4s ease',
    willChange: 'transform',
  },

  '&:hover': {
    svg: {
      color: '$text_alt_color',
      transform: 'translateX(-5px)',
    },
    p: {
      color: '$text_alt_color',
      transition: '$transitonTheme',
    },
  },
});

export const DateTimeRead = styled('p', {
  '--fluid-type-max': '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'var(--font-inconsolata), monospace',
  color: '$text_color',
  transition: '$transitonTheme',

  svg: {
    marginRight: '$1',
  },
});

export const ArticleTitle = styled('h1', {
  '--fluid-type-max': '3rem',
  '--fluid-type-min': '1.1rem',
  '--fluid-type-target': '4vw',
  fontFamily: 'var(--font-inconsolata), monospace',
  fontWeight: 800,
  padding: 0,
  paddingTop: '$2',
  margin: 0,
  color: '$text_color',
  transition: '$transitonTheme',

  '@supports (text-wrap: balance)': {
    maxInlineSize: '50ch',
    textWrap: 'balance',
  },
});

export const ArticleDescription = styled('h2', {
  '--fluid-type-max': '1.3rem',
  '--fluid-type-target': '2vw',
  fontFamily: 'var(--font-inconsolata), monospace',
  fontWeight: 400,
  lineHeight: '1.6em',
  padding: '$2 0',
  marginTop: '.5rem',
  color: '$text_color',
  transition: '$transitonTheme',
});

export const ArticleMarkdownContainer = styled('section', {
  width: '100%',
  paddingTop: '$3',
  margin: '0 auto',
});

export const Article = styled('article', {
  fontFamily: 'var(--font-inconsolata), monospace',
  maxWidth: '60rem',
  margin: '0 auto',
});

export const ArticleMarkdown = styled(ReactMarkdown, {
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.2rem',
  '--fluid-type-target': '5vw',
  lineHeight: '1.7 !important',
  padding: '2rem 1.4rem',
  color: '$text_color',

  '@bp4': {
    '--fluid-type-max': '1.3rem',
  },
});
