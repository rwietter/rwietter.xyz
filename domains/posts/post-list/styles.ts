import { styled } from 'features/ui/theme';
import Link from 'next/link';

export const PostList = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  paddingTop: '2rem',
  color: '$weakColorText',
});

export const PostListItem = styled(Link, {
  cursor: 'pointer',
  textDecoration: 'none',
  color: '$weakColorText',
  transition: '$transitonTheme',
  '&:hover': {
    color: '$white',
    textDecoration: 'underline',
  },
});
