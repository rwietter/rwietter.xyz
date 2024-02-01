import { styled } from 'features/ui/theme';

export const CardContainer = styled('li', {
  width: '100%',

  '@bp2': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
  },

  '& + &': {
    marginTop: '$3',
  },
});

export const DateTimeRead = styled('p', {
  contentVisibility: 'hidden',
  '--fluid-type-max': '1rem',
  alignItems: 'center',
  fontWeight: 200,
  fontFamily: 'var(--font-primary), monospace',
  color: '$text_gray_color',
  transition: '$transitonTheme',
  paddingRight: '3rem',

  svg: {
    marginRight: '$1',
  },

  '@bp2': {
    contentVisibility: 'visible',
  },
});

export const PostTitle = styled('p', {
  justifySelf: 'flex-start',
  lineHeight: 1.6,
  fontWeight: 500,
  maxWidth: 'fit-content',
  borderBottom: '1px dotted $text_gray_color',
  transition: '$transitonTheme',
  display: 'inline',
  fontFamily: 'var(--font-primary), monospace',
  color: '$text_color',
  overflowWrap: 'anywhere',
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.3rem',

  '&:hover': {
    color: '$main_color',
  },
});
