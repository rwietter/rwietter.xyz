// import Image from 'next/image';
import { styled } from 'styles/theme';

export const Wrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '$transitonTheme',
  padding: '$3 1rem 0 1rem',
});

export const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridAutoFlow: 'row',
  gridTemplateRows: 'repeat(2, 1fr)',
  paddingTop: '$4',

  'div > div': {
    height: '100%',
  },
});
