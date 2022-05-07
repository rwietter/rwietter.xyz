import { styled } from '../../styles/theme';

export const ContainerCSS = styled('div', {
  display: 'flex',
});

export const LayoutCSS = styled('div', {
  background: 'var(--background)',
  minHeight: '100vh',
  transition: 'background 0.35s, color 0.35s ease',
  width: '100%',
  margin: '0 auto',
  maxWidth: '60rem',
  paddingTop: '$10',

  '@bp5': {
    padding: '0 3.75rem 0 7rem',
  },
});
