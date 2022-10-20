import { styled } from 'styles/theme';

export const Container = styled('section', {
	width: '100%',
	height: '100%',
	minHeight: '22rem',
	maxHeight: '25rem',
	position: 'relative',
	background: '$mediumBackground',
	display: 'grid',
	borderRadius: '4px',
	gridTemplateColumns: '1fr',

	'@bp4': {
		gridTemplateColumns: '1fr 1fr',
	},
});

export const Icon = styled('div', {
	width: '100%',
	height: '100%',
	borderRadius: '4px',
	background: '$mediumBackground',
	img: {
		borderRadius: '4px',
		maxWidth: '100%',
		minHeight: '22rem',
		maxHeight: '25rem',
		minWidth: '498px',
		objectFit: 'cover',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	display: 'none',

	'@bp4': {
		display: 'block',
	},
});

export const Description = styled('div', {
	padding: '1rem 2rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	color: '$gray50',
	height: '100%',
	alignItems: 'flex-start',
});

export const Featured = styled('span', {
	fontSize: '1.2rem',
	fontFamily: 'Roboto Flex',
	letterSpacing: '-0.01em',
	fontWeight: '200',
});

export const TitleProject = styled('h1', {
	fontSize: '1.6rem',
	fontFamily: 'Inter var',
	letterSpacing: '-0.01em',
	fontWeight: '700',
	paddingTop: '.6rem',
});

export const DescriptionProject = styled('div', {
	fontSize: '1.1rem',
	fontFamily: 'Sora',
	fontWeight: '400',
	position: 'relative',
	maxWidth: '40rem',
	lineHeight: '1.5',
	wordBreak: 'break-word',
	wordWrap: 'break-word',

	borderRadius: '4px',
	marginTop: '.5rem',
	color: '$gray50',
	paddingBottom: '1.5rem',
	paddingTop: '1.2rem',
});

export const Tag = styled('span', {
	fontSize: '1.2rem',
	fontFamily: 'Roboto Flex',
	letterSpacing: '-0.01em',
	fontWeight: '200',

	'& + &': {
		paddingLeft: '1rem',
	},
});

export const Buttons = styled('div', {
	display: 'flex',
	alignItems: 'center',
	paddingTop: '1.9rem',
});

export const Button = styled('a', {
	color: '#fff',
	cursor: 'pointer',
	transition: 'all 0.5s ease',
	textDecoration: 'none',

	'& + &': {
		marginLeft: '2rem',
	},
});
