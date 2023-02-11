import Image from 'next/image';
import { styled } from 'styles/theme';
import ReactMarkdown from 'react-markdown';

export const ArticleContainer = styled('section', {
  padding: '0 1rem',

  '@bp3': {
    padding: '0',
  },
});

export const ImageContainer = styled('div', {
  position: 'relative',
  backgroundPosition: 'center',
  width: '100%',
});

export const ArticleImage = styled(Image, {
  borderRadius: '4px',
  height: '100%',
  position: 'relative',
  objectFit: 'cover',
  backgroundPosition: 'center',
  maxHeight: '30rem',
  width: '100%',

  variants: {
    bluring: {
      true: {
        filter: 'blur(10px)',
      },
      false: {
        filter: 'blur(0)',
      },
    },
  },
});

export const ImageCredit = styled('p', {
  color: '$weakColorText',
  '--fluid-type-max': '1rem',
  paddingLeft: '1rem',
  position: 'relative',
  top: '-3rem',
});

export const ArticleHeader = styled('section', {
  color: '$gray50',
  paddingBottom: '2rem',
  maxWidth: '60rem',
  margin: '0 auto',
});

export const BackToOverview = styled('button', {
  background: 'none',
  border: 'none',
  outline: 'none',
  margin: 0,
  color: '$gray50',
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

export const DateTimeRead = styled('p', {
  color: '$weakColorText',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '$4',
  '--fluid-type-max': '1.2rem',

  svg: {
    marginRight: '$1',
  },
});

export const ArticleTitle = styled('h1', {
  padding: 0,
  margin: 0,
  color: '$gray50',
  fontWeight: 900,
  paddingTop: '$2',
  fontFamily: 'Roboto Flex, sans-serif',
  '--fluid-type-min': '1.1rem',
  '--fluid-type-max': '3rem',
  '--fluid-type-target': '4vw',
});

export const ArticleDescription = styled('h2', {
  color: '$gray50',
  fontWeight: 400,
  padding: '$2 0',
  marginTop: '.5rem',
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-max': '1.5rem',
  '--fluid-type-target': '2vw',
});

export const ArticleMarkdownContainer = styled('section', {
  margin: '0 auto',
  width: '100%',
  paddingTop: '$3',
});

export const Article = styled('article', {
  fontFamily: 'Futura Std, sans-serif',
  maxWidth: '60rem',
  margin: '0 auto',
});

export const ArticleMarkdown = styled(ReactMarkdown, {
  paddingTop: '$6',
  lineHeight: '1.8',
  '--fluid-type-max': '1.5rem',

  'pre code span': {
    fontFamily: '"Fira Code", monospace !important',
    fontVariantLigatures: 'common-ligatures !important',
    fontFeatureSettings: '"ss01" on, "ss02" on, "ss03" on, "salt" on, "ss04" on !important',
  },
});
