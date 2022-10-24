import { styled } from 'styles/theme';

export const Container = styled('section', {
	width: '100%',
	height: '100%',
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
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	color: '$gray50',
	height: '100%',
	padding: '1rem 1rem 1.5rem 1rem',
	alignItems: 'flex-start',
});

export const Featured = styled('span', {
	fontSize: '.9rem',
	fontFamily: 'Roboto Flex',
	letterSpacing: '-0.02em',
	fontWeight: '200',
});

export const TitleProject = styled('h1', {
	all: 'unset',
	fontSize: '1.6rem',
	fontFamily: 'Inter var',
	letterSpacing: '-0.01em',
	fontWeight: '700',
	paddingTop: '.8rem',
});

export const DescriptionProject = styled('div', {
	fontSize: '1.1rem',
	fontFamily: 'Inter var',
	fontWeight: '400',
	position: 'relative',
	maxWidth: '40rem',
	lineHeight: '1.5',
	wordBreak: 'break-word',
	wordWrap: 'break-word',
	borderLeft: '4px solid $primary',

	borderRadius: '4px',
	marginTop: '.5rem',
	color: '$gray50',
	paddingBottom: '.5rem',
	paddingTop: '.5rem',
	margin: '1rem 0',
	paddingLeft: '.7rem',
});

export const Tags = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	'@bp3': {
		flexDirection: 'row',
	},
});

export const Tag = styled('span', {
	fontSize: '1.2rem',
	fontFamily: 'Roboto Flex',
	letterSpacing: '-0.01em',
	fontWeight: '200',
	lineHeight: '1.5',

	'@bp3': {
		'& + &': {
			paddingLeft: '1rem',
		},
	},
});

export const Buttons = styled('div', {
	display: 'flex',
	alignItems: 'center',
	paddingTop: '1.9rem',
});

export const Button = styled('a', {
	color: '$gray50',
	cursor: 'pointer',
	transition: 'all 0.5s ease',
	textDecoration: 'none',

	'& + &': {
		marginLeft: '2rem',
	},
});
