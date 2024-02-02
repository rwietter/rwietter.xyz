import { styled } from 'features/ui/theme'
import Link from 'next/link'

export const ManuBarWrapper = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  bottom: '20px',
  height: '3.5rem',
  padding: '0 0.3rem',
  left: '50%',
  transform: 'translateX(-50%)',
  position: 'fixed',
  borderRadius: '0.5rem',
  width: '90%',
  transition: '$transitonTheme, border-color 300ms ease',
  background: '$cb_box_alt_color',
  backdropFilter: 'blur(5px)',
  zIndex: 10,

  '@bp5': {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    padding: '0.8rem 0',
    position: 'fixed',
    borderLeft: '2px solid $bg_color',
    right: 0,
    top: 0,
    width: '3.5rem',
    transform: 'translateX(0)',
    left: 'unset',
    bottom: 'unset',
    borderRadius: 0,
    border: 'none',
    background: '$sub_alt_color',
  },
})

export const MenuBarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  '@bp5': {
    flexDirection: 'column',
  },
})

export const MenuBarLink = styled(Link, {
  display: 'block',
  color: '$text_color',
  transition: '$transitonTheme',
})

export const MenuBarItem = styled('div', {
  background: 'none',
  border: 'none',
  outline: 'none',
  margin: '0',
  color: '$text_color',
  cursor: 'pointer',
  padding: '1.1rem',
  position: 'relative',
  transition: '$transitonTheme',
  display: 'flex',
  alignItems: 'center',

  '@bp5': {
    padding: '.9rem',
    position: 'relative',
    '&:hover': {
      color: '$caret_color',
    },
  },
  '&:hover': {
    color: '$main_color',
  },
})
