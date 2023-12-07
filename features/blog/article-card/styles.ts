import { styled } from 'features/ui/theme';

export const CardContainer = styled('section', {
  maxWidth: '350px',
  width: '100%',
});

export const PostTitle = styled('p', {
  justifySelf: 'flex-start',
  lineHeight: 1.2,
  paddingTop: '.5rem',
  fontWeight: 500,
  fontFamily: 'var(--font-inconsolata), monospace',
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
    padding: '.5rem 0 1rem 0',
    lineHeight: 1.2,
    fontFamily: 'var(--font-inconsolata), monospace',
    fontWeight: 200,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'max-content',
    width: '100%',
    display: 'block',
    '--fluid-type-max': '1.1rem',
  },

  '#category': {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    padding: '.1rem .4rem',
    fontFamily: 'var(--font-inconsolata), monospace',
    fontWeight: 300,
    background: '$sub_color',
    color: '$text_color',
    borderRadius: '4px',
    transition: '$transitonTheme',
    '--fluid-type-max': '1rem',

    '&:hover': {
      background: '$main_color',
      color: '$bg_color',
    },
  },
});
