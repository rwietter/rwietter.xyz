import { motion } from 'framer-motion';
import { styled } from '../../styles/theme';

export const Container = styled('div', {
  color: '$gray50',
  width: '100%',
  maxWidth: '60rem',
  padding: '0 1rem',
  paddingTop: '2rem',
  margin: '0 auto',
});

export const Title = styled('h1', {
  fontWeight: 600,
  padding: '1rem 0 1rem 0',
  color: '$gray50',
  '--fluid-type-min': '1.2rem',
  '--fluid-type-max': '2.5rem',
  '--fluid-type-target': '5vw',
});

export const ProjectItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
});

export const Year = styled('h2', {
  fontWeight: 400,
  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
});

export const List = styled('ul', {
  paddingLeft: '2.5rem',
});

export const ListItem = styled(motion.li, {
  fontWeight: 200,
  padding: '0.4rem 0',
  position: 'relative',
  zIndex: 2,
  background: 'transparent',
});

export const ListItemName = styled(motion.a, {
  color: '$gray50',
  '--fluid-type-max': '1.2rem',

  strong: {
    fontWeight: 500,
    transition: 'all .3s ease',
    color: '$gray50',
  },
  span: {
    paddingLeft: '0.5rem',
    fontWeight: 200,
    color: '$weakColorText',
    lineHeight: '1.7',
  },
});

export const HoverBackground = styled(motion.div, {
  background: '$mediumBackgroundHover',
  position: 'absolute',
  right: '30px',
  top: '2px',
  width: '100%',
  height: '100%',
  zIndex: -1,
  borderRadius: '0.5rem',
});
