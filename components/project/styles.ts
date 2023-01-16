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
  zIndex: 2,
  borderRadius: '8px',
  background: 'transparent',
});

export const Title = styled('h2', {
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  color: '$gray50',
  fontFamily: 'Sora, sans-serif',
  fontWeight: 300,
  paddingTop: '$2',
});

export const Description = styled('p', {
  fontSize: 'clamp(.8rem, 1.5vw, .9rem)',
  color: '$weakColorText',
  fontFamily: 'Sora, sans-serif',
  fontWeight: 300,
  paddingTop: '$2',
  lineHeight: '1.8',
  textAlign: 'justify',
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
