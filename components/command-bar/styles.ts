import { styled } from '@stitches/react';
import { KBarAnimator, KBarPositioner, KBarSearch } from 'kbar';

const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: '$kbarBackground',
  boxSizing: 'border-box',
  zIndex: 4,
  fontFamily: 'Futura Std, sans-serif',
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.2rem',
  '--fluid-type-target': '3vw',
});

const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$mediumBackground',
  color: '$gray50',
});

const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$mediumBackground',
});

const Kbd = styled('kbd', {
  background: '$mediumBackground',
  color: '$gray50',
  padding: '4px 8px',
  textTransform: 'uppercase',
});

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
});

const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.15rem',

  svg: {
    color: '$gray50',
  },
});

const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  'span:first-child': {
    paddingRight: '8px',
  },
});

const Animator = styled(KBarAnimator, {
  backgroundColor: '#ffffff0d',
  maxWidth: '600px',
  width: '100%',
  color: '$gray50',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0px 10px 20px 8px rgba(0, 0, 0, 0.1)',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '#ffffff0d',
    WebkitBackdropFilter: 'saturate(900%) blur(8px)',
    backdropFilter: 'saturate(900%) blur(8px)',
  },

  /* Hide scrollbar for Chrome, Safari and Opera */
  '& > div > div::-webkit-scrollbar': {
    width: '3px',
  },

  /* Hide scrollbar for IE, Edge and Firefox */
  '& > div > div': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
});

const Box = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 16px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$kbarBoxHover',
  },
});

export {
  Positioner,
  Search,
  GroupName,
  Kbd,
  Shortcut,
  Action,
  ActionRow,
  Animator,
  Box,
};
