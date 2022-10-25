import { useState } from 'react';
import LoaderRouterIndicator from 'react-topbar-progress-indicator';
import { Router } from 'next/router';
import { useColorStore } from 'store/track-color';

const LoadingIndicator = () => {
	const [progress, setProgress] = useState(false);
  const { colors }: any = useColorStore();

	LoaderRouterIndicator.config({
		barColors: {
      0: colors[0] || '#2A78E5',
			1.0: colors[2] || colors[1] || '#3AD0E0',
		},
		barThickness: 4,
		shadowBlur: 5,
	});

	Router.events.on('routeChangeStart', () => {
		setProgress(true);
	});

	Router.events.on('routeChangeComplete', () => {
		setProgress(false);
	});

	return <div>{progress && <LoaderRouterIndicator />}</div>;
};

export { LoadingIndicator };
