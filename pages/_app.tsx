import '../styles/styles.css';
import '../styles/syntax-nord.css';
import '../styles/shadow-icon.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { Analytics } from '@vercel/analytics/react';
import { LoadingIndicator } from 'components/Loading';
import { useEffect } from 'react';
import { useTheme } from 'store/switch-theme';
import { applyTheme } from 'utils/apply-theme';
import Prism from 'prismjs';
import dynamic from 'next/dynamic';
import apolloClient from 'utils/apollo-client';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  weight: ['300', '400', '500', '800'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  style: 'normal',
  variable: '--font-inconsolata',
});

const CommandBar = dynamic(() => import('components/Kbar/command-bar'), {
  ssr: true,
});

require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
require('prismjs/components/prism-css');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');

const App = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    applyTheme(theme);
    Prism.highlightAll();
  }, [theme]);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className={inconsolata.variable}>
      <CommandBar>
        <LoadingIndicator />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
          <Analytics />
        </ApolloProvider>
      </CommandBar>
    </div>
  );
};

export default App;
