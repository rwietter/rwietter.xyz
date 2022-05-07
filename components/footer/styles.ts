import { styled } from '../../styles/theme';

export const Footer = styled('footer', {
  padding: '$3 $8 $10 $8',
  margin: '$5 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray50',
  transition: '$transitonTheme',

  '.powered': {
    fontWeight: 300,
    fontSize: '$1',
    textAlign: 'center',

    '@bp3': {
      fontSize: '$2',
    },
  },

  nav: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '$3',

    '@bp2': {
      marginTop: '0',
    },
  },

  'nav a': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '$2',
    color: '$primary',
    transition: '$transitonTheme',

    '&:hover': {
      color: '$secondary',
    },
  },

  '@bp2': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '@bp5': {
    padding: '$5 $8 $6 $8',
  },
});
