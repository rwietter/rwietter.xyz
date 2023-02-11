import { useState } from 'react';
import LoaderRouterIndicator from 'react-topbar-progress-indicator';
import { Router } from 'next/router';
import { useColorStore, type ColorStore } from 'store/track-color';

const LoadingIndicator = () => {
  const [progress, setProgress] = useState(false);
  const { colors } = useColorStore() as ColorStore;

  LoaderRouterIndicator.config({
    barColors: {
      0: colors[0],
      0.5: colors[1],
      1.0: colors[2],
    },
    barThickness: 2,
    shadowBlur: 0,
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
