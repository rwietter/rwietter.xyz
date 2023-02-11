import { styled } from 'styles/theme';

export const BlogContainerPosts = styled('section', {
  display: 'flex',
  flexDirection: 'column',
});

export const LayoutCSS = styled('main', {
  background: '$background',
  minHeight: 'auto',
  transition: 'background 0.35s, color 0.35s ease',
  width: '100%',
  margin: '0 auto',
  paddingBottom: '4rem',

  '@media (min-width: 900px)': {
    width: '100%',
    maxWidth: '57rem',
    margin: '0 auto',
  },
});
