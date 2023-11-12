import { styled } from 'features/ui/theme';

export const DateTime = styled('time', {
  all: 'unset',
  fontFamily: 'var(--font-inconsolata), sans-serif',
  span: {
    '--fluid-type-max': '1rem',
    '--fluid-type-target': '0.8vw',
  },
});
