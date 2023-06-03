import { styled } from 'features/ui/theme';

export const KbarContainer = styled('div', {
  paddingTop: '2rem',
});

export const KbarButton = styled('button', {
  background: 'transparent',

  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  color: '$gray50',
  padding: '5px',
  borderRadius: '8px',
  transition: '$transitonTheme',
  textAlign: 'center',
  '--fluid-type-min': '0.9rem',
  '--fluid-type-max': '1rem',
  '&:hover': {
    color: '$gray50',
    background: '$kbarBoxActive',

    code: {
      background: '$shortcutHover',
    },
  },

  code: {
    background: '$shortcut',
    textAlign: 'center',
    color: '#08070b',
    padding: '1px 8px 2px 8px',
    borderRadius: '4rem',
    fontWeight: 500,
    transition: '$transitonTheme',
    '--fluid-type-min': '0.9rem',
    '--fluid-type-max': '1rem',
  },
});
