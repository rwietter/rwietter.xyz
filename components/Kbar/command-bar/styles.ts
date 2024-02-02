import { styled } from 'features/ui/theme'
import { KBarAnimator, KBarPositioner, KBarSearch } from 'kbar'

const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: '$cb_bg_color',
  boxSizing: 'border-box',
  zIndex: 4,
})

const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  fontFamily: 'var(--font-secondary)',
  background: '$sub_alt_color',
  color: '$text_color',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '#ffffff0d',
    WebkitBackdropFilter: 'saturate(207%) blur(30px)',
    backdropFilter: 'saturate(207%) blur(30px)',
  },
})

const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$sub_alt_color',
  fontFamily: 'var(--font-secondary)',

  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '#ffffff0d',
    WebkitBackdropFilter: 'saturate(207%) blur(30px)',
    backdropFilter: 'saturate(207%) blur(30px)',
  },
})

const Kbd = styled('kbd', {
  background: '$bg_alt_color',
  color: '$text_color',
  padding: '4px 8px',
  textTransform: 'uppercase',
})

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
})

const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  fontFamily: 'var(--font-secondary)',
  '--fluid-type-min': '.8rem',
  '--fluid-type-max': '.9rem',
  '--fluid-type-target': '2vw',

  svg: {
    color: '$text_color',
  },
})

const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  'span:first-child': {
    paddingRight: '8px',
  },
})

const Animator = styled(KBarAnimator, {
  backgroundColor: '#ffffff0d',
  maxWidth: '600px',
  width: '100%',
  color: '$text_color',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0px 10px 20px 8px rgba(0, 0, 0, 0.2)',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '#ffffff0d',
    WebkitBackdropFilter: 'saturate(207%) blur(30px)',
    backdropFilter: 'saturate(207%) blur(30px)',
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
})

const Box = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 16px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$cb_box_alt_color',
  },
})

export {
  Action,
  ActionRow,
  Animator,
  Box,
  GroupName,
  Kbd,
  Positioner,
  Search,
  Shortcut,
}
