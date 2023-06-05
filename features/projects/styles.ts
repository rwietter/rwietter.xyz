import { styled } from 'features/ui/theme';

export const Wrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  transition: '$transitonTheme',
  padding: '2rem 1rem 0 1rem',

  '@bp2': {
    padding: '2rem 1rem 0 1rem',
  },
});
