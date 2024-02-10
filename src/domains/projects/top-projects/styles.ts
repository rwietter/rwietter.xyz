import { styled } from 'src/ui/theme'

export const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridAutoFlow: 'row',
  paddingTop: '$4',

  'div > div': {
    height: 'auto',
  },
})
