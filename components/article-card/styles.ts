import Image from 'next/image';
import { styled } from 'styles/theme';

export const CardContainer = styled('section', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	padding: '$4 $3',
	background: '$mediumBackground',
	borderBottom: '2px solid $background',
	color: '$gray50',
	transition: '$transitonTheme, border .4s ease',
	cursor: 'pointer',
	height: 'auto',
	maxWidth: '53rem',
	borderRadius: '0.4rem',
	margin: '0 auto',

	'&:hover': {
		background: '$mediumBackgroundHover',
		color: '$textHighlight',
	},

	'@bp5': {
		marginTop: '$6',
	},
});

export const CardImageContainer = styled('div', {
	width: '70px',
	height: '70px',
});

export const CardImage = styled(Image, {
	objectFit: 'cover',
	borderRadius: '50%',
	width: '70px',
});

export const CardInformations = styled('section', {
	display: 'flex',
	flexFlow: 'column',
	paddingLeft: '$3',
	alignItems: 'flex-start',

	'#title': {
		justifySelf: 'flex-start',
		fontWeight: 900,
		lineHeight: '1.3',
		fontFamily: 'Sora, sans-serif',
		fontFeatureSettings: '0',
		fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
	},

	'#description': {
		fontSize: 'clamp(1rem, 2vw, 1.2rem)',
		paddingTop: '0.5rem',
		lineHeight: '1.3',
		letterSpacing: '-0.02em',
		fontFamily: 'Roboto Flex, sans-serif',
		fontWeight: 200,
	},

	'#category': {
		fontSize: 'clamp(0.9rem, 2vw, 1rem)',
		marginTop: '1rem',
		padding: '.2rem .6rem',
		letterSpacing: '-0.02em',
		fontFamily: 'Sora, sans-serif',
		fontWeight: 600,
		background: '$gradientYellow',
		color: '$dark',
		borderRadius: '4px',
	},
});
