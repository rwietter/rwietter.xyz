import { styled } from 'features/ui/theme';

export const Weather = styled('span', {
  all: 'unset',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexFlow: 'row wrap',
  lineHeight: '1.6',
  fontFamily: 'var(--font-primary), monospace',
  '--fluid-type-max': '1rem',

  div: {
    display: 'flex',
    alignItems: 'center',
  },
});
