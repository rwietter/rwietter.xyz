import { useState } from 'react';
import LoaderRouterIndicator from 'react-topbar-progress-indicator';
import { Router } from 'next/router';

LoaderRouterIndicator.config({
  barColors: {
    0: '#c1b',
    '1.0': '#00FFA0',
  },
  barThickness: 4,
  shadowBlur: 5,
});

const LoadingIndicator = () => {
  const [progress, setProgress] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setProgress(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setProgress(false);
  });

  return (
    <div>
      { progress && <LoaderRouterIndicator /> }
    </div>
  );
};

export { LoadingIndicator };
