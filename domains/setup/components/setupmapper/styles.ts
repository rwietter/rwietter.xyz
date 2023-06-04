import { styled } from 'features/ui/theme';

export const SetupMapperContainer = styled('section', {
  paddingTop: '2rem',
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
      lineHeight: '2',
      '--fluid-type-min': '0.8rem',
      '--fluid-type-max': '1rem',
      span: {
        color: '$weakColorText',
      },
    },
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

  span: {
    color: '$weakColorText',
  },
});
