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
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
  backdropFilter: 'blur(8px)',
  zIndex: 4,
});

const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '#ffffff0d',
  color: '#f2f2f2',
});

const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '#ffffff0d',
});

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '#8f9ba8',
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
  color: '#f2f2f2',
  borderRadius: '8px',
  overflow: 'hidden',
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
    backgroundColor: '#ffffff0d',
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
