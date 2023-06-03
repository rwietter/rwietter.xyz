import { styled } from 'features/ui/theme';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const ArticleContainer = styled('section', {

});

export const ImageContainer = styled('div', {
  position: 'relative',
  backgroundPosition: 'center',
  width: '100%',
});

export const ArticleImage = styled(Image, {
  height: '100%',
  position: 'relative',
  objectFit: 'cover',
  backgroundPosition: 'center',
  maxHeight: '30rem',
  width: '100%',
});

export const ImageCredit = styled('p', {
  color: '$weakColorText',
  filter: 'brightness(0.7)',
  position: 'relative',
  paddingTop: '.5rem',
  textAlign: 'center',
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-max': '1rem',
});

export const ArticleHeader = styled('section', {
  color: '$gray50',
  maxWidth: '60rem',
  margin: '0 auto',

  padding: '0 1rem',
  paddingBottom: '2rem',

  '@bp3': {
    padding: '0 1rem',
    paddingBottom: '2rem',
  },
});

export const InfoHeader = styled('div', {
  width: '100%',
  color: '$gray50',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-max': '1.2rem',

  '& > div': {
    paddingTop: '$2',
  },

  '@bp2': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > div': {
      paddingTop: 0,
    },
  },
});

export const BackToOverview = styled('button', {
  background: 'none',
  border: 'none',
  outline: 'none',
  margin: 0,
  width: 'fit-content',
  display: 'flex',
  cursor: 'pointer',
  color: '$gray50',
  fontFamily: 'Futura Std, sans-serif',

  svg: {
    marginRight: '$2',
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
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-max': '1rem',
  cursor: 'default',

  svg: {
    marginRight: '$1',
  },
});

export const ArticleTitle = styled('h1', {
  padding: 0,
  margin: 0,
  color: '$gray50',
  fontWeight: 800,
  paddingTop: '$2',
  letterSpacing: '-0.02em',
  fontFamily: 'Raleway, sans-serif',
  '--fluid-type-min': '1.1rem',
  '--fluid-type-max': '3rem',
  '--fluid-type-target': '4vw',
});

export const ArticleDescription = styled('h2', {
  color: '$gray50',
  fontWeight: 400,
  lineHeight: '1.6em',
  padding: '$2 0',
  marginTop: '.5rem',
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-max': '1.3rem',
  '--fluid-type-target': '2vw',
});

export const ArticleMarkdownContainer = styled('section', {
  margin: '0 auto',
  width: '100%',
  paddingTop: '$3',
});

export const Article = styled('article', {
  fontFamily: 'Futura Std, sans-serif',
  maxWidth: '50rem',
  margin: '0 auto',
  padding: '0 1rem',

  '@bp3': {
    padding: '0',
  },
});

export const ArticleMarkdown = styled(ReactMarkdown, {
  paddingTop: '$6',
  lineHeight: '1.8',
  '--fluid-type-max': '1rem',
  '--fluid-type-min': '1rem',

  '@bp4': {
    '--fluid-type-max': '1.1rem',
  },
});
