import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: 'Inter var, Inter, sans-serif',
		fontFeatureSettings: "'ss02', 'ss03', 'salt' 1 !important",
		fontVariantLigatures: 'common-ligatures !important',
	},
	'h1, h2, h3, h4, h5, h6': {
		margin: 0,
		fontFamily: 'Inter, sans-serif',
		padding: 0,
	},
	body: {
		background: 'var(--colors-background)',
		fontFamily:
			'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
		transition: '$transitonTheme',
		scrollBehavior: 'smooth',
	},
	'h1, h2, h3': {
		lineHeight: '1.1',
	},
	p: {
		// maxWidth: '60ch',
		// marginInlineEnd: 'auto',
	},
	code: {
		fontFamily: 'Fira Code, Consolas, Monaco !important',
		fontVariantLigatures: 'common-ligatures',
		fontSize: '1.1rem !important',
	},
});
