import { styled } from 'features/ui/theme'

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  height: '100%',
  minHeight: '100dvh',
  background: '$bg_color',
  padding: '0 1.5rem',
  transition: '$transitonTheme',
})

export const LayoutCSS = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  background: '$bg_color',
  transition: '$transitonTheme',
  width: '100%',
  maxWidth: '60rem',
  margin: '0 auto',
  padding: '1rem 1.5rem 8rem 1.5rem',

  variants: {
    layout: {
      small: {
        maxWidth: '60rem',
      },
      medium: {
        maxWidth: '70rem',
      },
      large: {
        maxWidth: '80rem',
      },
      full: {
        maxWidth: '100%',
      },
      default: {
        maxWidth: '60rem',
      },
    },
  },
})
