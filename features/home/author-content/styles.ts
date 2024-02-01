/* eslint-disable quotes */
import { styled } from "features/ui/theme";

export const Container = styled('section', {
  padding: '$3 0 0 0',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  '@bp3': {
    padding: '$4 0 $2 0',
  },
});

export const CurrentlyInformations = styled('div', {
  padding: '$1 0',
  color: '$text_color',
  transition: '$transitonTheme',
  p: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily: 'var(--font-primary), monospace',
    lineHeight: 1.5,
    svg: {
      marginRight: '$1',
    },
  },
  'p:first-child': {
    paddingBottom: '$1',
  },
});
