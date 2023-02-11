import { styled } from 'styles/theme';

export const BlogContainerPosts = styled('section', {
  display: 'flex',
  flexDirection: 'column',
});

export const ArticleLayout = styled('section', {
  background: 'var(--background)',
  transition: 'background 0.35s, color 0.35s ease',
  width: '100%',
  margin: '0 auto',
  paddingBottom: '4rem',
  paddingTop: '2rem',
});
