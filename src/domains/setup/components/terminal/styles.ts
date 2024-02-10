import { styled } from 'src/ui/theme'

export const Terminal = styled('code', {
  borderRadius: '8px',
  borderTopRightRadius: '0',
  padding: '10px',
  transition: '$transitonTheme',
  marginTop: '2.8rem',
  display: 'block',
  position: 'relative',
  border: '1px solid $cb_box_alt_color',

  button: {
    padding: '.3rem 1rem',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    outline: 'none',
    fontFamily: 'var(--font-secondary), monospace',
    position: 'absolute',
    right: '0',
    background: 'transparent',
    cursor: 'pointer',
    top: '-28px',
    borderTop: '1px solid $cb_box_alt_color',
    borderLeft: '1px solid $cb_box_alt_color',
    borderRight: '1px solid $cb_box_alt_color',
    borderBottom: 'none',
    color: '$text_color',
    '--fluid-type-min': '0.6rem',
    '--fluid-type-target': '2vw',
    '--fluid-type-max': '0.8rem',
    transition: '$transitonTheme',
  },

  code: {
    '--fluid-type-max': '0.8rem',
    '--fluid-type-target': '1vw',
    '--fluid-type-min': '0.6rem',
    color: '$text_color',
    fontFamily: 'var(--font-code)',
    lineHeight: 1.5,
    fontWeight: 200,
  },
})
