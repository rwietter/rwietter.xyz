import { useState } from 'react';
import LoaderRouterIndicator from 'react-topbar-progress-indicator';
import { Router } from 'next/router';

LoaderRouterIndicator.config({
  barColors: {
    0: '#2A78E5',
    '1.0': '#3AD0E0',
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
