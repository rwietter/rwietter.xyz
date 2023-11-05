import { styled } from 'features/ui/theme';
import Image from 'next/image';

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
  fontFamily: 'Futura Std, sans-serif',
  position: 'relative',
  paddingTop: '.5rem',
  filter: 'brightness(0.7)',
  color: '$text_color',
  transition: '$transitonTheme',
});

export const ArticleMarkdownContainer = styled('section', {
  width: '100%',
  paddingTop: '$3',
  margin: '0 auto',
});
