import { styled } from 'features/ui/theme';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const ArticleContainer = styled('section', {

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
  fontFamily: 'Futura Std, sans-serif',
  position: 'relative',
  paddingTop: '.5rem',
  filter: 'brightness(0.7)',
  color: '$weakColorText',
});

export const ArticleHeader = styled('section', {
  margin: '0 auto',
  maxWidth: '60rem',
  padding: '0 1rem',
  paddingBottom: '2rem',
  color: '$gray50',

  '@bp3': {
    paddingBottom: '2rem',
  },
});

export const InfoHeader = styled('div', {
  '--fluid-type-max': '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontFamily: 'Futura Std, sans-serif',
  width: '100%',
  color: '$gray50',

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
  fontFamily: 'Futura Std, sans-serif',
  width: 'fit-content',
  margin: 0,
  background: 'none',
  color: '$gray50',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',

  svg: {
    marginRight: '$2',
    transition: '$transitonTheme, transform 0.4s ease',
    willChange: 'transform',
  },

  '&:hover': {
    svg: {
      color: '$primary',
      transform: 'translateX(-5px)',
    },
    p: {
      color: '$primary',
      transition: '$transitonTheme',
    },
  },
});

export const DateTimeRead = styled('p', {
  '--fluid-type-max': '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'Futura Std, sans-serif',
  color: '$weakColorText',
  cursor: 'default',

  svg: {
    marginRight: '$1',
  },
});

export const ArticleTitle = styled('h1', {
  '--fluid-type-max': '3rem',
  '--fluid-type-min': '1.1rem',
  '--fluid-type-target': '4vw',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  padding: 0,
  paddingTop: '$2',
  margin: 0,
  color: '$gray50',
});

export const ArticleDescription = styled('h2', {
  '--fluid-type-max': '1.3rem',
  '--fluid-type-target': '2vw',
  fontFamily: 'Futura Std, sans-serif',
  fontWeight: 400,
  lineHeight: '1.6em',
  padding: '$2 0',
  marginTop: '.5rem',
  color: '$gray50',
});

export const ArticleMarkdownContainer = styled('section', {
  width: '100%',
  paddingTop: '$3',
  margin: '0 auto',
});

export const Article = styled('article', {
  fontFamily: 'Futura Std, sans-serif',
  maxWidth: '50rem',
  padding: '0 1rem',
  margin: '0 auto',
});

export const ArticleMarkdown = styled(ReactMarkdown, {
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.2rem',
  '--fluid-type-target': '5vw',
  lineHeight: '1.7 !important',
  paddingTop: '$6',

  '@bp4': {
    '--fluid-type-max': '1.3rem',
  },
});
