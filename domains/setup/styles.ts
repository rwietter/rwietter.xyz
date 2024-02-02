import { styled } from 'features/ui/theme';

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  transition: '$transitonTheme',
  padding: '2rem 0',
});

export const Content = styled('div', {
  paddingTop: '2rem',
  width: '100%',
});
