import { styled } from 'features/ui/theme';

export const BlogContainerPosts = styled('section', {
  display: 'flex',
  flexDirection: 'column',
});

export const ArticleLayout = styled('section', {
  transition: 'background 0.35s, color 0.35s ease',
  width: '100%',
  margin: '0 auto',
  paddingBottom: '4rem',
  paddingTop: '1rem',
});
