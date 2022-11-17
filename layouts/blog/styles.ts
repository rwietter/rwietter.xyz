import { styled } from 'styles/theme';

export const BlogContainerPosts = styled('section', {
	display: 'flex',
	flexDirection: 'column',
});

export const LayoutCSS = styled('main', {
	background: '$background',
	minHeight: '100vh',
	transition: 'background 0.35s, color 0.35s ease',
	width: '100%',
	margin: '0 auto',
	paddingTop: '3rem',
	paddingBottom: '3.1rem',
	paddingLeft: '0',

	'@bp5': {
		// paddingLeft: '13rem',
		paddingTop: '0',
		paddingBottom: '0.6rem',
	},
});
