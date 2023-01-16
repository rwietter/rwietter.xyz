// import Image from 'next/image';
import { styled } from 'styles/theme';

export const Wrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',

  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextSizeAdjust: '100%',
  MozOsxFontSmoothing: 'grayscale',
  MozTextSizeAdjust: '100%',
  padding: '$3 $2',
  transition: '$transitonTheme',

  paddingBottom: '5rem',
});

export const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridAutoFlow: 'row',
  gridTemplateRows: 'repeat(2, 1fr)',

  'div > div': {
    height: '100%',
  },
});
