import { styled } from '../../../styles/theme';

export const Container = styled('section', {
  padding: '$3 $2 0 $2',
  color: '$gray50',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  '@bp3': {
    padding: '$5 $8 $2 $8',
  },
});

export const CurrentlyInformations = styled('div', {
  padding: '$2 0',
  color: '$gray50',
  transition: '$transitonTheme',
  p: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    lineHeight: 1.5,
    svg: {
      marginRight: '$1',
    },
  },
  'p:first-child': {
    paddingBottom: '$1',
  },
});
