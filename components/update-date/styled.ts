/* eslint-disable no-dupe-keys */
import { styled } from 'styles/theme';

export const DateTime = styled('time', {
  all: 'unset',
  fontFamily: 'Roboto Flex, sans-serif',
  span: {
    '--fluid-type-max': '1rem',
    '--fluid-type-target': '0.8vw',
  },
});
