import { motion } from 'framer-motion';
import { styled } from 'styles/theme';

export const Wrapper = styled(motion.a, {
  position: 'relative',
  display: 'flex',
  height: '100%',
});

export const Container = styled(motion.section, {
  transition: '$transitonTheme',
  padding: '$3',
  position: 'relative',
  zIndex: 1,
  borderRadius: '8px',
  background: 'transparent',
});

export const Title = styled('h2', {
  color: '$gray50',
  fontWeight: 400,
  paddingTop: '$2',

  '--fluid-type-min': '1.2rem',
  '--fluid-type-max': '1.7rem',
  '--fluid-type-target': '1.5vw',
});

export const Description = styled('p', {
  color: '$weakColorText',
  fontWeight: 400,
  paddingTop: '$2',
  lineHeight: '1.8',
  textAlign: 'justify',

  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.5rem',
  '--fluid-type-target': '1vw',
});

export const HoverBackground = styled(motion.div, {
  background: '$mediumBackgroundHover',
  position: 'absolute',
  left: 0,
  top: 0,
  right: '0',
  width: '100%',
  height: '100%',
  zIndex: 1,
  borderRadius: '8px',
});
