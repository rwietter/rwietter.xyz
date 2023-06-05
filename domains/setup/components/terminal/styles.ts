import { styled } from 'features/ui/theme';

export const Terminal = styled('code', {
  borderRadius: '8px',
  borderTopRightRadius: '0',
  background: '$terminal',
  padding: '10px',
  transition: '$transitonTheme',
  marginTop: '2.8rem',
  display: 'block',
  position: 'relative',

  '&:hover': {
    background: '$terminalHover',

    '& button': {
      background: '$terminalHover',
    },
  },

  button: {
    background: '$terminal',
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
    color: '$gray50',
    '--fluid-type-min': '0.6rem',
    '--fluid-type-target': '2vw',
    '--fluid-type-max': '0.8rem',
    transition: '$transitonTheme',

    '&:hover': {
      background: '$terminalHover',
    },
  },

  code: {
    '--fluid-type-max': '1rem',
    '--fluid-type-min': '0.8rem',

    color: '$gray50',
    fontFamily: 'Dank Mono, monospace',
    lineHeight: '1.8',
  },
});
