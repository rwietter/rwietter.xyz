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
    background: '$sub_color',

    '& button': {
      background: '$sub_color',
    },
  },

  button: {
    background: '$sub_alt_color',
    padding: '.3rem 1.5rem',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    outline: 'none',
    fontFamily: 'Futura Std, sans-serif',
    border: 'none',
    position: 'absolute',
    right: '0',
    cursor: 'pointer',
    top: '-24px',
    color: '$text_color',
    '--fluid-type-min': '0.6rem',
    '--fluid-type-target': '2vw',
    '--fluid-type-max': '0.8rem',
    transition: '$transitonTheme',

    '&:hover': {
      background: '$sub_color',
    },
  },

  code: {
    '--fluid-type-max': '1rem',
    '--fluid-type-min': '0.8rem',

    color: '$text_color',
    fontFamily: 'Fira Code, monospace',
    lineHeight: '1.8',
  },
});
