/* eslint-disable react/no-danger */
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from 'utils/apollo-client';
import '../styles/dracula-prism.css';
import '../styles/styles.css';
import { LoadingIndicator } from 'components/loading';
import { useEffect } from 'react';
import { ThemeStore, useThemeStore } from 'store/switch-theme';
import { applyTheme } from 'utils/apply-theme';
import Prism from 'prismjs';

require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
require('prismjs/components/prism-css');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useThemeStore() as ThemeStore;

  useEffect(() => {
    applyTheme(theme);
    Prism.highlightAll();
  }, [theme]);

  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div>
      <LoadingIndicator />
      <ApolloProvider client={apolloClient as any}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
