/* eslint-disable react/no-danger */
/* eslint-disable no-use-before-define */
/* eslint-disable react/function-component-definition */

'use client';

import { ReactNode, useEffect } from 'react';
import '../styles/styles.css';
import { applyTheme } from 'utils/apply-theme';
import { useTheme } from 'store/switch-theme';
import { Layout } from 'layouts/content';
import { getCssText } from 'styles/theme';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const { theme } = useTheme();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <html lang="pt-BR">
      <Head />
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

const Head = () => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet dns-prefetch preconnect" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@200;400;500&display=swap" />
    <link rel="stylesheet dns-prefetch preconnect" href="https://fonts.cdnfonts.com/css/fantasque-sans-mono" />
    <link rel="stylesheet dns-prefetch preconnect" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap" rel="stylesheet" />
    <meta name="application-name" content="Maurício Witter" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Maurício Witter" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#FFFFFF" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/mstile-150x150.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/icons/android-chrome-512x512.png" />
    <link sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
    <link sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
    <link sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
    <link sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
    <link sizes="60x60" href="/icons/apple-touch-icon-60x60.png" />
    <link sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
    <link sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
    <link sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="/icons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/icons/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="/icons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="/icons/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="/icons/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="/icons/mstile-310x310.png" />
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  </head>
);
