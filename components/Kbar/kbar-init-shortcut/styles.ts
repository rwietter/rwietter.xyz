import { styled } from 'features/ui/theme';

export const KbarContainer = styled('div', {
  paddingTop: '2rem',
});

export const KbarButton = styled('button', {
  cursor: 'pointer',
  color: '$text_alt_color',
  padding: '2px 4px',
  borderRadius: '1em',
  border: 'none',
  outline: 'none',
  transition: '$transitonTheme',
  textAlign: 'center',
  '--fluid-type-min': '0.9rem',
  '--fluid-type-max': '1rem',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    background: '$sub_alt_color',
  },

  code: {
    background: '$sub_color',
    textAlign: 'center',
    color: '$text_alt_color',
    borderRadius: '1em',
    fontWeight: 500,
    transition: '$transitonTheme',
    '--fluid-type-min': '.9rem',
    '--fluid-type-max': '1rem',
  },
});
