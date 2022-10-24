import { styled } from 'styles/theme';

export const Header = styled('section', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem',
	color: '$gray50',
});

export const Title = styled('h1', {
	fontSize: '3rem',
	fontFamily: 'Inter var',
	letterSpacing: '-0.06em',
	color: '$textHighlight',
	fontFeatureSettings: '"ss02" on, "ss03" on, "ss04" on',
});

export const Subtitle = styled('p', {
	fontSize: '1.2rem',
	paddingTop: '1rem',
	fontFamily: 'Roboto Flex',
	letterSpacing: '-0.02em',
	textAlign: 'center',

	'@bp3': {
		fontSize: '1.5rem',
	},
});
