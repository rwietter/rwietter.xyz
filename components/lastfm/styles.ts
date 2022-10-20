import { styled } from 'styles/theme';

export const Playing = styled('div', {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	minHeight: '6rem',
	maxWidth: '30rem',
	marginTop: '$1',
	width: '100%',
	transition: '$transitonTheme, transform 0.3s ease',
	willChange: 'scale',
	'&:hover': {
		transform: 'scale(1.02)',
		cursor: 'pointer',
	},
	'@bp3': {
		minWidth: '380px',
	},
});

export const PlayingArtist = styled('div', {
	paddingLeft: '$8',
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'column',
	paddingTop: '$2',
	alignSelf: 'flex-start',
	width: '100%',
	color: '$gray50',
	transition: '$transitonTheme',

	p: {
		paddingTop: '$2',
		wordBreak: 'break-word',
	},

	'div p': {
		paddingTop: '0',
		paddingLeft: '$1',
	},

	'.play a': {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		textDecoration: 'none',
		color: '$gray50',
		transition: '$transitonTheme',
		svg: {
			position: 'relative',
			left: '-3px',
		},
		strong: {
			position: 'relative',
			left: '-3px',
		},
		'&:hover': {
			color: '$primary',
		},
	},

	div: {
		display: 'flex',
	},

	'@bp1': {
		maxWidth: '100%',
	},
});

export const PlayingImage = styled('div', {
	width: '60px',
	alignSelf: 'flex-end',
});
