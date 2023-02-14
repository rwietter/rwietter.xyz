import { styled } from '../../styles/theme';

export const ContainerCSS = styled('section', {
  display: 'flex',
  flexDirection: 'column',
});

export const LayoutCSS = styled('main', {
  background: 'var(--background)',
  transition: 'background 0.35s, color 0.35s ease',
  width: '100%',
  maxWidth: '60rem',
  margin: '0 auto',
  paddingBottom: '4rem',
  paddingTop: '1rem',
});
