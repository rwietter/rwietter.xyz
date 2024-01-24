import { styled } from 'features/ui/theme';

export const KbarContainer = styled('div', {
  paddingTop: '2rem',
});

export const KbarButton = styled('button', {
  cursor: 'pointer',
  color: '$text_alt_color',
  fontFamily: 'var(--font-space-grotesk), monospace',
  padding: '2px 8px 4px 8px',
  borderRadius: '1em',
  outline: 'none',
  transition: '$transitonTheme',
  textAlign: 'center',
  '--fluid-type-min': '0.9rem',
  '--fluid-type-max': '1rem',
  background: 'transparent',
  display: 'block',
  alignItems: 'center',
  border: 'none',

  '&:hover': {
    background: '$sub_alt_color',
  },

  code: {
    textAlign: 'center',
    color: '$text_alt_color',
    transition: '$transitonTheme',
    borderRadius: '60rem',
    fontWeight: 600,
    '--fluid-type-min': '.9rem',
    '--fluid-type-max': '1rem',
  },
});
