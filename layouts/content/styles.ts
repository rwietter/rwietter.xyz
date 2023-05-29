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

  variants: {
    layout: {
      small: {
        maxWidth: '60rem',
      },
      medium: {
        maxWidth: '70rem',
      },
      large: {
        maxWidth: '80rem',
      },
      full: {
        maxWidth: '100%',
      },
      default: {
        maxWidth: '60rem',
      },
    },
  },
});
