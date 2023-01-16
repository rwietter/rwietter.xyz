import { styled } from 'styles/theme';

export const Container = styled('div', {
  color: '$gray50',
  padding: '0 3rem',
  paddingBottom: '8rem',
});

export const Title = styled('h1', {
  fontFamily: 'Sora, sans-serif',
  fontWeight: 300,
  fontSize: 'clamp(1.2rem, 1.5vw, 1.6rem)',
  padding: '1rem 0 1rem 0',
});

export const ProjectItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
});

export const Year = styled('h2', {
  fontFamily: 'Sora, sans-serif',
  fontWeight: 300,
  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
});

export const List = styled('ul', {
  paddingLeft: '2.5rem',
});

export const ListItem = styled('li', {
  fontWeight: 200,
  padding: '0.4rem 0',
});

export const ListItemName = styled('a', {
  color: '$gray50',
  strong: {
    fontSize: 'clamp(.9rem, 1.5vw, 1rem)',
    fontFamily: 'Sora, sans-serif',
    fontWeight: 300,
    textDecoration: 'underline',
    color: '$gray50',
  },
  span: {
    paddingLeft: '0.5rem',
    fontFamily: 'Sora, sans-serif',
    fontWeight: 200,
    fontSize: 'clamp(0.7rem, 1.5vw, .9rem)',
    color: '#8f9ba8',
    lineHeight: '1.7',
  },
});
