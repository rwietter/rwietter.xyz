// import Image from 'next/image';
import { styled } from 'styles/theme';

export const Wrapper = styled('section', {
	display: 'flex',
	flexDirection: 'column',
	paddingBottom: '5rem',

	textRendering: 'optimizeLegibility',
	WebkitFontSmoothing: 'antialiased',
	WebkitTextSizeAdjust: '100%',
	MozOsxFontSmoothing: 'grayscale',
	MozTextSizeAdjust: '100%',
});

export const Grid = styled('section', {
	display: 'grid',
	gridTemplateRows: 'repeat(auto-fit, minmax(20rem, 1fr))',
	gridTemplateColumns: '1fr',
	position: 'relative',
	gap: '4rem 0',
	padding: '5rem 1rem',
});
