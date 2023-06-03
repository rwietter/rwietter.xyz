import { styled } from 'features/ui/theme';

export const Weather = styled('span', {
  all: 'unset',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexFlow: 'row wrap',
  lineHeight: '1.6',

  '--fluid-type-max': '1rem',

  'strong, span': {
    fontFamily: 'Roboto Flex, sans-serif',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
  },
});
