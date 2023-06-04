import { styled } from 'features/ui/theme';

export const SearchContent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    a: {
      color: '$gray50',
      fontFamily: 'Futura Std, sans-serif',
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
    marginTop: '0.5rem',
    width: '100%',
    outline: 'none',
    border: '1px solid #8f9ba8',
    fontSize: '1rem',
    color: '$gray50',
    background: '$background',
    borderRadius: '8px',
    padding: '10px',
    transition: '$transitonTheme',

    '&::placeholder': {
      color: '$weakColorText',
    },
  },
});

export const Description = styled('span', {
  color: '$weakColorText',
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-min': '.9rem',
  '--fluid-type-max': '1rem',
});
