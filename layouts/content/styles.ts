import { styled } from '../../styles/theme';

export const ContainerCSS = styled('div', {
	display: 'flex',
	flexDirection: 'column',
});

export const LayoutCSS = styled('div', {
	background: 'var(--background)',
	transition: 'background 0.35s, color 0.35s ease',
	width: '100%',
	maxWidth: '75rem',
	margin: '0 auto',
	paddingTop: '2rem',

	'@bp5': {
		padding: '3rem 3.75rem 0 7rem',
	},
});
