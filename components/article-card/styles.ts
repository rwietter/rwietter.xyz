import Image from 'next/image';
import { styled } from 'styles/theme';

export const CardContainer = styled('section', {
  maxWidth: '350px',
  width: '100%',
});

export const CardImage = styled(Image, {
  objectFit: 'cover',
  borderRadius: '8px',
  width: '100%',
  height: '100%',
  maxHeight: '12rem',

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

export const PostTitle = styled('p', {
  justifySelf: 'flex-start',
  lineHeight: '1.2',
  paddingTop: '.5rem',
  fontWeight: 600,
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-min': '1.1rem',
  '--fluid-type-max': '1.8rem',
  '--fluid-type-target': '5vw',
});

export const CardInformations = styled('section', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
  color: '$gray50',
  overflowWrap: 'anywhere',

  '#description': {
    padding: '.5rem 0 1rem 0',
    lineHeight: '1.3',
    fontFamily: 'Futura Std, sans-serif',
    fontWeight: 200,
    '--fluid-type-max': '1.3rem',
  },

  '#category': {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    padding: '.2rem .6rem',
    letterSpacing: '-0.02em',
    fontFamily: 'Sora, sans-serif',
    fontWeight: 200,
    background: '$gray50',
    color: '$gray100',
    borderRadius: '4px',
    '--fluid-type-max': '1rem',
  },
});
