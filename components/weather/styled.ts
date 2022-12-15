/* eslint-disable no-dupe-keys */
import { styled } from 'styles/theme';

export const Weather = styled('span', {
  all: 'unset',
  fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
  fontFamily: 'Roboto Flex, sans-serif',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  'strong, span': {
    fontFamily: 'Roboto Flex, sans-serif !important',
  },
});
