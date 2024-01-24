import { styled } from 'features/ui/theme';

export const CardContainer = styled('section', {
  maxWidth: '60em',
  width: '100%',
  position: 'relative',
});

export const Divider = styled('div', {
  width: '100%',
  height: '1px',
  margin: '1.5rem 0',
  background: '$sub_alt_color',
  transition: '$transitonTheme',
});

export const DateTimeRead = styled('p', {
  '--fluid-type-max': '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 200,
  fontFamily: 'var(--font-space-grotesk), monospace',
  color: '$text_gray_color',
  transition: '$transitonTheme',

  svg: {
    marginRight: '$1',
  },
});

export const LocalTimeContainer = styled('div', {
  paddingTop: '1rem',
});

export const PostTitle = styled('p', {
  justifySelf: 'flex-start',
  lineHeight: 1.2,
  fontWeight: 500,
  transition: '$transitonTheme',
  fontFamily: 'var(--font-space-grotesk), monospace',
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.3rem',
});

export const CardInformations = styled('section', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
  color: '$text_color',
  overflowWrap: 'anywhere',

  '#description': {
    paddingTop: '.5rem',
    lineHeight: 1.2,
    fontFamily: 'var(--font-space-grotesk), monospace',
    fontWeight: 300,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '$text_gray_color',
    maxWidth: 'max-content',
    width: '100%',
    display: 'block',
    transition: '$transitonTheme',
    '--fluid-type-max': '1.1rem',
  },
});

export const ReadMore = styled('p', {
  color: '$main_color',
  fontWeight: 500,
  marginTop: '.8rem',
  display: 'inline-block',
  fontFamily: 'var(--font-space-grotesk), monospace',
  transition: '$transitonTheme',
  '--fluid-type-max': '1rem',

  '&:hover': {
    textDecoration: '2px underline',
  },
});
