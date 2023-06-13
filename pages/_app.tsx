/* eslint-disable react/no-danger */
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from 'utils/apollo-client';
import { Analytics } from '@vercel/analytics/react';
import { LoadingIndicator } from 'components/Loading';
import { useEffect } from 'react';
import { useTheme } from 'store/switch-theme';
import { applyTheme } from 'utils/apply-theme';
import Prism from 'prismjs';

import '../styles/syntax-nord.css';
import '../styles/styles.css';
import '../styles/shadow-icon.css';
import { CommandBar } from 'components/Kbar';

require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
require('prismjs/components/prism-css');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    applyTheme(theme);
    Prism.highlightAll();
  }, [theme]);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <CommandBar>
      <LoadingIndicator />
      <ApolloProvider client={apolloClient as any}>
        <Component {...pageProps} />
        <Analytics />
      </ApolloProvider>
    </CommandBar>
  );
};

export default MyApp;
