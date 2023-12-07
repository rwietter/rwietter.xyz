import { styled } from 'features/ui/theme';

export const Terminal = styled('code', {
  borderRadius: '8px',
  borderTopRightRadius: '0',
  background: '$sub_alt_color',
  padding: '10px',
  transition: '$transitonTheme',
  marginTop: '2.8rem',
  display: 'block',
  position: 'relative',

  '&:hover': {
    background: '$cb_box_alt_color',

    '& button': {
      background: '$cb_box_alt_color',
    },
  },

  button: {
    background: '$sub_alt_color',
    padding: '.3rem 1.5rem',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    outline: 'none',
    fontFamily: 'var(--font-inconsolata), monospace',
    border: 'none',
    position: 'absolute',
    right: '0',
    cursor: 'pointer',
    top: '-23px',
    color: '$text_color',
    '--fluid-type-min': '0.6rem',
    '--fluid-type-target': '2vw',
    '--fluid-type-max': '0.8rem',
    transition: '$transitonTheme',
  },

  code: {
    '--fluid-type-max': '1rem',
    '--fluid-type-min': '0.8rem',

    color: '$text_color',
    fontFamily: 'var(--font-inconsolata), monospace',
    lineHeight: 1.5,
  },
});
