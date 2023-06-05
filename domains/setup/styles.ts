import { styled } from 'features/ui/theme';

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  transition: '$transitonTheme',
  padding: '2rem 0 2rem 0',

  '@bp2': {
    padding: '2rem .5rem 0 .5rem',
  },
});

export const Content = styled('div', {
  paddingTop: '2rem',
  width: '100%',
});
