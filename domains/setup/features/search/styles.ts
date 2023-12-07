import { styled } from 'features/ui/theme';

export const SearchContent = styled('section', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',

  nav: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'flex-start',
    lineHeight: '1.8',

    '@bp1': {
      lineHeight: 'initial',
    },

    a: {
      color: '$text_color',
      transition: '$transitonTheme',
      fontFamily: 'var(--font-inconsolata), monospace',

      '&:hover': {
        color: '$main_color',
      },
    },
    'a:not(:last-child)': {
      marginRight: '1rem',
    },
  },
});

export const InputSearch = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
  width: '100%',

  input: {
    background: '$bg_alt_color',
    border: '1px solid $sub_color',
    borderRadius: '8px',
    color: '$text_color',
    fontSize: '1rem',
    marginTop: '0.5rem',
    outline: 'none',
    padding: '10px',
    transition: '$transitonTheme',
    width: '100%',

    '&:focus': {
      borderColor: '$main_color',
    },

    '&::placeholder': {
      color: '$text_color',
    },
  },
});

export const Description = styled('span', {
  '--fluid-type-max': '1rem',
  '--fluid-type-min': '.9rem',
  color: '$text_color',
  transition: '$transitonTheme',
  fontFamily: 'var(--font-inconsolata), monospace',
});
