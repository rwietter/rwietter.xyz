import { styled } from 'features/ui/theme';

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  transition: '$transitonTheme',
  padding: '2rem 1rem 2rem 1rem',
});

export const Content = styled('div', {
  paddingTop: '2rem',
  width: '100%',
});
