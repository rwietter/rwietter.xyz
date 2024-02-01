import { styled } from 'features/ui/theme';
import Link from 'next/link';

export const PostList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  paddingTop: '2rem',

  'li': {
    '@bp5': {
      alignSelf: 'center',
    }
  },

  'li:not(:first-child)': {
    marginTop: '1rem',
  },
});

export const PostListItem = styled(Link, {
  cursor: 'pointer',
  textDecoration: 'none',
  transition: '$transitonTheme',
  fontFamily: 'var(--font-primary), monospace',
  color: '$text_color',
  lineHeight: 1.6,
  textAlign: 'center',
  display: 'inline-flex',

  '&:hover': {
    color: '$main_color',
    textDecoration: 'underline',
  },
});
