import { styled } from 'features/ui/theme';

export const Button = styled('button', {
  background: 'none',
  display: 'none',
  color: '$text_color',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: '$transitonTheme',
  fontFamily: 'Roboto Flex, sans-serif',

  '@bp1': {
    display: 'flex',
    alignItems: 'center',
  },

  '&:hover': {
    color: '$main_color',
  },
});
