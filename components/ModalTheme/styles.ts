/**
 * Modal Switch Theme
 */

import { styled } from 'features/ui/theme';

export const ModalSwitchTheme = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  background: '$bg_alt_color',
  position: 'fixed',
  zIndex: 100,
  width: '100%',
  maxWidth: '20rem',
  left: 0,
  right: 0,
  top: '40%',
  bottom: 'auto',
  borderRadius: '0.2rem',
  margin: '0 auto',
  padding: '1rem',
  transition: '$transitonTheme',
  boxShadow: '0px 0px 17px 12px rgba(0,0,0,0.1)',
});

export const ModalList = styled('ul', {
  display: 'flex',
  alignItems: 'flex-start',
  listStyle: 'none',
  flexDirection: 'column',
  paddingTop: '2rem',
  width: '100%',
});

export const ModalContent = styled('li', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  transition: '$transitonTheme',
  padding: '0.4rem 0.5rem',
  borderRadius: '1em',
  '&:hover': {
    background: '$main_color',
    color: '$sub_color',
  },
});

export const ModalItem = styled('p', {
  color: '$text_color',
  cursor: 'pointer',
  width: '100%',
  borderRadius: '4px',
  transition: '$transitonTheme',
  '&:hover': {
    color: '$sub_color',
  },
});

export const ModalColors = styled('div', {
  display: 'flex',
  position: 'absolute',
  right: '2rem',
  padding: '0.5rem',
  borderRadius: '1em',
  transition: '$transitonTheme',
});

export const ModalColor = styled('span', {
  width: '.8rem',
  height: '.8rem',
  borderRadius: '100%',
  transition: '$transitonTheme',

  '& + &': {
    marginLeft: '0.3rem',
  },
});

export const ModalItemButton = styled('button', {
  background: 'none',
  border: 'none',
  position: 'absolute',
  color: '$text_color',
  top: 0,
  right: 0,
  cursor: 'pointer',
  margin: '.8rem 1rem 0 0',
  transition: '$transitonTheme',
});
