'use client';

import { styled } from 'features/ui/theme';

export const PostTitle = styled('p', {
  justifySelf: 'flex-start',
  lineHeight: '1.2',
  paddingTop: '.5rem',
  fontWeight: 500,
  fontFamily: 'Raleway, sans-serif',
  '--fluid-type-min': '1rem',
  '--fluid-type-max': '1.2rem',
});

export const CardInformations = styled('section', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
  color: '$gray50',
  overflowWrap: 'anywhere',

  '#description': {
    padding: '.5rem 0 1rem 0',
    lineHeight: '1.3',
    fontFamily: 'Futura Std, sans-serif',
    fontWeight: 200,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'max-content',
    width: '100%',
    display: 'block',
  },
});
