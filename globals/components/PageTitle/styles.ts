import { styled } from 'features/ui/theme';

export const Header = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Futura Std, sans-serif',
});

export const Title = styled('h1', {
  fontWeight: 650,
  color: '$text_color',

  '--fluid-type-min': '1.3rem',
  '--fluid-type-max': '2.6rem',
  '--fluid-type-target': '5vw',
});
