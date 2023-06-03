import { styled } from 'features/ui/theme';

export const ArticlesContainer = styled('section', {
  display: 'grid',
  justifyItems: 'center',
  gridGap: '3rem 2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  padding: '3rem 1rem',

  '@media (min-width: 900px)': {
    gridGap: '4rem 2rem',
  },
});
