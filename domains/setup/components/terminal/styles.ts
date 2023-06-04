import { styled } from 'features/ui/theme';

export const Terminal = styled('code', {
  borderRadius: '8px',
  background: '#131523',
  padding: '10px',
  transition: '$transitonTheme',
  marginTop: '2.5rem !important',
  display: 'block',
  position: 'relative',

  '&:hover': {
    background: '#1a1a2e',

    '& button': {
      background: '#1a1a2e',
    },
  },

  button: {
    background: '#131523',
    padding: '.3rem 1rem',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    outline: 'none',
    fontFamily: 'Futura Std, sans-serif',
    border: 'none',
    position: 'absolute',
    right: '0',
    cursor: 'pointer',
    top: '-26px',
    color: '$gray50',
    '--fluid-type-max': '1rem',
    transition: '$transitonTheme',

    '&:hover': {
      background: '#1a1a2e',
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
