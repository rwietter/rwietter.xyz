import { styled } from 'styles/theme';

export const KbarContainer = styled('div', {
  paddingTop: '2rem',
});

export const KbarButton = styled('button', {
  background: 'transparent',

  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '1rem',
  color: '$gray50',
  padding: '7px 5px 10px 5px',
  borderRadius: '8px',
  transition: '$transitonTheme',
  textAlign: 'center',
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
    fontSize: '0.8rem !important',
  },
});
