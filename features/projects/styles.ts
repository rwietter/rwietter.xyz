// import Image from 'next/image';
import { styled } from 'styles/theme';

export const Wrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '$transitonTheme',

  paddingBottom: '5rem',
  paddingTop: '$4',
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
