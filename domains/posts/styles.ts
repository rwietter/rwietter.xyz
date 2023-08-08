import { styled } from 'features/ui/theme';

export const PostsContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem 1rem 0 1rem',
});

export const PostListTitle = styled('h1', {
  fontWeight: '600',
  color: '$weakColorText',
  '--fluid-type-min': '1.1rem',
  '--fluid-type-max': '1.6rem',
});
