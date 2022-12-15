import { styled } from 'styles/theme';

export const ArticlesContainer = styled('section', {
  display: 'grid',
  justifyItems: 'baseline',
  alignItems: 'flex-start',
  gridGap: '3rem 2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  padding: '3rem 1rem 0 1rem',

  '@media (min-width: 900px)': {
    padding: '3rem 0 0 0',
    gridGap: '4rem 2rem',
  },
});
