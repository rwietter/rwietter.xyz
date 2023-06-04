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
    background: '$background',
    border: '1px solid #8f9ba8',
    borderRadius: '8px',
    color: '$gray50',
    fontSize: '1rem',
    marginTop: '0.5rem',
    outline: 'none',
    padding: '10px',
    transition: '$transitonTheme',
    width: '100%',

    '&::placeholder': {
      color: '$weakColorText',
    },
  },
});

export const Description = styled('span', {
  '--fluid-type-max': '1rem',
  '--fluid-type-min': '.9rem',
  color: '$weakColorText',
  fontFamily: 'Futura Std, sans-serif',
});
