import { styled } from 'features/ui/theme';
import Link from 'next/link';

export const PostList = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  paddingTop: '2rem',
});

export const PostListItem = styled(Link, {
  cursor: 'pointer',
  textDecoration: 'none',
  transition: '$transitonTheme',
  fontFamily: 'Futura Std, sans-serif',
  color: '$text_color',
  lineHeight: '1.5',

  '&:hover': {
    color: '$main_color',
    textDecoration: 'underline',
  },
});
