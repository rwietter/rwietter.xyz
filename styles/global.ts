import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: 'Roboto Flex, sans-serif',
		fontFeatureSettings:
			"'ss01', 'ss02', 'ss03', 'ss03', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'ss10', 'salt' 1",
		fontVariantLigatures: 'common-ligatures',
	},
	body: {
		background: 'var(--colors-background)',
		transition: '$transitonTheme',
		scrollBehavior: 'smooth',
	},
	'h1, h2, h3': {
		lineHeight: '1.1',
	},
	code: {
		fontFamily: 'Fira Code, Consolas, Monaco !important',
		fontVariantLigatures: 'common-ligatures',
		fontFeatureSettings: '"ss01" 0',
		fontSize: '1.1rem !important',
	},
});
