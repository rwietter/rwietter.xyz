'use client';

import { useState } from 'react';
import LoaderRouterIndicator from 'react-topbar-progress-indicator';
import { Router } from 'next/router';

const LoadingIndicator = () => {
  const [progress, setProgress] = useState(false);

  LoaderRouterIndicator.config({
    barColors: {
      0: '#ffbe0b',
      1.0: '#fb5607',
    },
    barThickness: 4,
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
