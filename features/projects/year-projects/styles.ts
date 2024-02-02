import { styled } from 'features/ui/theme'
import { motion } from 'framer-motion'

export const Container = styled('div', {
  color: '$text_color',
  transition: '$transitonTheme',
  width: '100%',
  maxWidth: '60rem',
  paddingTop: '2rem',
  margin: '0 auto',
  fontFamily: 'var(--font-secondary), monospace',
})

export const Title = styled('h1', {
  fontWeight: 800,
  padding: '1rem 0 1rem 0',
  fontFamily: 'var(--font-secondary), monospace',
  color: '$text_color',
  transition: '$transitonTheme',
  '--fluid-type-min': '1.2rem',
  '--fluid-type-max': '2.5rem',
  '--fluid-type-target': '5vw',
})

export const ProjectItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
})

export const Year = styled('h2', {
  fontWeight: 400,
  '--fluid-type-min': '1.3rem',
  '--fluid-type-max': '2rem',
})

export const List = styled('ul', {
  paddingLeft: '2.5rem',
})

export const ListItem = styled(motion.li, {
  fontWeight: 200,
  padding: '0.4rem 0',
  position: 'relative',
  zIndex: 2,
  background: 'transparent',
})

export const ListItemName = styled(motion.a, {
  color: '$text_color',
  transition: '$transitonTheme',
  '--fluid-type-max': '1.05rem',

  strong: {
    fontWeight: 500,
    transition: '$transitonTheme',
    color: '$text_color',
  },
  span: {
    paddingLeft: '0.5rem',
    fontWeight: 200,
    color: '$text_alt_color',
    lineHeight: '1.7',
  },
})

export const HoverBackground = styled(motion.div, {
  background: '$sub_alt_color',
  transition: '$transitonTheme',
  position: 'absolute',
  top: '2px',
  right: '5px',
  width: '100%',
  height: '90%',
  zIndex: -1,
  borderRadius: '0.5rem',
})
