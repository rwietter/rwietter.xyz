import { styled } from 'features/ui/theme';

export const BlogContainerPosts = styled('section', {
  display: 'flex',
  background: '$bg_color',
  transition: '$transitonTheme',
  flexDirection: 'column',
});

export const ArticleLayout = styled('section', {
  transition: '$transitonTheme',
  width: '100%',
  margin: '0 auto',
  paddingBottom: '4rem',
  paddingTop: '1rem',
});
