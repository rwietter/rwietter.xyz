import Prism from 'prismjs';
import dynamic from 'next/dynamic';
import apolloClient from 'utils/apollo-client';
import localFont from 'next/font/local';

import { ApolloProvider } from '@apollo/react-hooks';
import { Analytics } from '@vercel/analytics/react';
import { LoadingIndicator } from 'components/Loading';
import { useEffect } from 'react';
import { useTheme } from 'store/switch-theme';
import { dark, light } from 'features/ui/theme';

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';

import type { AppProps } from 'next/app';

import '../styles/styles.css';
import '../styles/syntax-nord.css';
import '../styles/shadow-icon.css';
import '../styles/blockquote-highlight.css';

const Grotesk = SpaceGrotesk({
  weight: ['300', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  style: 'normal',
  variable: '--font-space-grotesk',
});

const Gloock = localFont({
  src: '../public/Gloock-Regular.ttf',
  variable: '--font-gloock',
  preload: true,
  style: 'normal',
  weight: 'normal',
  display: 'swap',
});

const Berkeley = localFont({
  src: '../public/BerkeleyMono-Regular.ttf',
  variable: '--font-berkeley',
  preload: false,
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

const themes = {
  dark,
  light,
};

const App = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const currentTheme = themes[theme];
    const classTheme = document.querySelector('body') as HTMLBodyElement;
    classTheme.className = currentTheme;
    Prism.highlightAll();
  }, [theme]);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className={`${Grotesk.variable} ${Gloock.variable} ${Berkeley.variable}`}>
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
