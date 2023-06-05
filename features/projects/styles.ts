import { styled } from 'features/ui/theme';

export const Wrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  transition: '$transitonTheme',
  padding: '2rem 0 0 0',

  '@bp2': {
    padding: '2rem .5rem 0 .5rem',
  },
});
