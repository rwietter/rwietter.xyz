/* eslint-disable no-dupe-keys */
import { styled } from 'styles/theme';

export const Weather = styled('span', {
  all: 'unset',
  fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
  fontFamily: 'Roboto Flex, sans-serif',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexFlow: 'column wrap',
  lineHeight: '1.6',

  '@bp3': {
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'row',
  },

  'strong, span': {
    fontFamily: 'Roboto Flex, sans-serif',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
  },
});
