// import Image from 'next/image';
import { styled } from 'styles/theme';

export const Wrapper = styled('section', {
	display: 'flex',
	flexDirection: 'column',

	textRendering: 'optimizeLegibility',
	WebkitFontSmoothing: 'antialiased',
	WebkitTextSizeAdjust: '100%',
	MozOsxFontSmoothing: 'grayscale',
	MozTextSizeAdjust: '100%',
});

export const Grid = styled('section', {
	display: 'grid',
	gridTemplateRows: 'repeat(auto-fit, minmax(250px, 1fr))',
	gridTemplateColumns: '1fr',
	position: 'relative',
	gap: '2rem 0',
	padding: '3rem .5rem',
	paddingBottom: '5rem',

	'@bp3': {
		padding: '3rem 1rem',
	},
});
