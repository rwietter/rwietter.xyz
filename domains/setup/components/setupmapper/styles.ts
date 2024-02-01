import { styled } from 'features/ui/theme';

export const SetupMapperContainer = styled('section', {
  paddingTop: '2rem',
  h2: {
    color: '$text_color',
    fontFamily: 'var(--font-primary), monospace',
    fontWeight: 600,
    fontSize: '1.5rem',
  },
  ul: {
    paddingLeft: '1.8rem',
    paddingTop: '1rem',
    li: {
      color: '$text_color',
      fontFamily: 'var(--font-primary), monospace',
      lineHeight: '2',
      '--fluid-type-min': '0.8rem',
      '--fluid-type-max': '1rem',
      span: {
        color: '$text_color',
        fontWeight: 300,
      },
    },
  },
});

export const SoftwareLink = styled('a', {
  color: '$text_color',
  fontFamily: 'var(--font-primary), monospace',
  lineHeight: '1.8',
  fontWeight: 500,
  transition: '$transitonTheme',
  '--fluid-type-min': '0.8rem',
  '--fluid-type-max': '1rem',

  '&:hover': {
    color: '$main_color',
  },

  span: {
    color: '$main_color',
  },
});
