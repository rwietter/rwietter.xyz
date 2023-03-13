/* eslint-disable no-dupe-keys */
import { styled } from 'styles/theme';

export const DateTime = styled('time', {
  all: 'unset',
  fontFamily: 'Futura Std, sans-serif',
  span: {
    '--fluid-type-max': '1.05rem',
    '--fluid-type-target': '0.8vw',
  },
});
