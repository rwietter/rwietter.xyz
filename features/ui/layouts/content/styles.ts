import { styled } from 'features/ui/theme';

export const LayoutCSS = styled('main', {
  display: 'flex',
  flexDirection: 'column',
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
