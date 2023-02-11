/* eslint-disable no-dupe-keys */
import { styled } from 'styles/theme';

export const Weather = styled('span', {
  all: 'unset',
  fontFamily: 'Roboto Flex, sans-serif',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexFlow: 'column wrap',
  lineHeight: '1.6',

  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.3rem',
  '--fluid-type-target': '1vw',

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
