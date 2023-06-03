import { styled } from 'features/ui/theme';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.a, {
  position: 'relative',
  display: 'flex',
  height: '100%',
  fontFamily: 'Futura Std, sans-serif',
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

  '--fluid-type-min': '1.1rem',
  '--fluid-type-max': '1.2rem',
  '--fluid-type-target': '2vw',
});

export const Description = styled('p', {
  color: '$weakColorText',
  fontWeight: 400,
  paddingTop: '$2',
  lineHeight: '1.5',
  textAlign: 'start',

  '--fluid-type-max': '1rem',
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
