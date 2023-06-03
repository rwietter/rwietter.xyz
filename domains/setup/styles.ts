import { styled } from 'features/ui/theme';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  transition: '$transitonTheme',
  padding: '2rem 1rem 0 1rem',
});

export const Content = styled('div', {
  paddingTop: '2rem',
  width: '100%',
});

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

  span: {
    color: '$weakColorText',
    fontFamily: 'Futura Std, sans-serif',
  },

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

export const ItemsContent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
});

export const SystemOS = styled('section', {
  paddingTop: '3rem',
  h2: {
    color: '$gray50',
    fontFamily: 'Sora, sans-serif',
    fontSize: '1.5rem',
  },
  ul: {
    paddingLeft: '1.8rem',
    paddingTop: '1rem',
    li: {
      color: '$gray50',
      fontFamily: 'Futura Std, sans-serif',
      lineHeight: '1.8',
      '--fluid-type-min': '0.8rem',
      '--fluid-type-max': '1rem',
      span: {
        color: '$weakColorText',
      },
    },
  },
});

export const ToolsItems = styled('section', {
  paddingTop: '3rem',
  h2: {
    color: '$gray50',
    fontFamily: 'Sora, sans-serif',
    fontSize: '1.5rem',
  },
  ul: {
    paddingLeft: '1.8rem',
    paddingTop: '1rem',
  },
});

export const SoftwareLink = styled('a', {
  color: '$gray50',
  fontFamily: 'Futura Std, sans-serif',
  lineHeight: '1.8',
  transition: '$transitonTheme',
  '--fluid-type-min': '0.8rem',
  '--fluid-type-max': '1rem',

  '&:hover': {
    color: '$weakColorText',
  },
});

export const Terminal = styled('pre', {
  color: '$gray50',
  lineHeight: '1.8',
  transition: '$transitonTheme',
  display: 'block',
  backgroundColor: '#22273B !important',
  borderRadius: '8px',
  padding: '10px',
  '--fluid-type-min': '0.8rem',
  '--fluid-type-max': '1rem',
  marginTop: '1.5rem !important',
});
