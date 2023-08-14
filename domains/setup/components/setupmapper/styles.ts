import { styled } from 'features/ui/theme';

export const SetupMapperContainer = styled('section', {
  paddingTop: '2rem',
  h2: {
    color: '$text_color',
    fontFamily: 'Sora, sans-serif',
    fontSize: '1.5rem',
  },
  ul: {
    paddingLeft: '1.8rem',
    paddingTop: '1rem',
    li: {
      color: '$text_color',
      fontFamily: 'Futura Std, sans-serif',
      lineHeight: '2',
      '--fluid-type-min': '0.8rem',
      '--fluid-type-max': '1rem',
      span: {
        color: '$text_color',
      },
    },
  },
});

export const SoftwareLink = styled('a', {
  color: '$sub_color',
  fontFamily: 'Futura Std, sans-serif',
  lineHeight: '1.8',
  fontWeight: 500,
  transition: '$transitonTheme',
  '--fluid-type-min': '0.8rem',
  '--fluid-type-max': '1rem',

  '&:hover': {
    color: '$caret_color',
  },

  span: {
    color: '$text_alt_color',
  },
});
