import Image from 'next/image';
import { styled } from 'styles/theme';

export const CardContainer = styled('section', {
  maxWidth: '400px',
  width: '100%',
});

export const CardImage = styled(Image, {
  objectFit: 'cover',
  borderRadius: '8px',
  width: '100%',
  height: '100%',
});

export const CardInformations = styled('section', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
  color: '$gray50',

  '#title': {
    justifySelf: 'flex-start',
    fontWeight: 700,
    lineHeight: '1.1',
    paddingTop: '.5rem',
    fontFamily: 'Roboto Flex, sans-serif',
    fontFeatureSettings: '0',
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
  },

  '#description': {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    padding: '.5rem 0 1rem 0',
    lineHeight: '1.3',
    letterSpacing: '-0.02em',
    fontFamily: 'Roboto Flex, sans-serif',
    fontWeight: 200,
  },

  '#category': {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    padding: '.2rem .6rem',
    letterSpacing: '-0.02em',
    fontFamily: 'Sora, sans-serif',
    fontWeight: 600,
    background: '$gradientYellow',
    color: '$dark',
    borderRadius: '4px',
  },
});
