/* eslint-disable react/no-danger */
import { getCssText } from 'features/ui/theme';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

const APP_NAME = 'rwietter';

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const props = await Document.getInitialProps(ctx);
    return props;
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap" rel="stylesheet" />
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" title="XML RSS feed" href="/rss.xml" />
          <link rel="alternate" type="application/atom+xml" title="Atom RSS feed" href="/rss.atom" />
          <link rel="alternate" type="application/json" title="JSON RSS feed" href="/rss.json" />
          <meta name="google-site-verification" content="oQ_XpS8_c5DYamhVCpljtPUmV-CX7D8zVxHbTd_ExNc" />
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
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="/icons/mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/icons/mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="/icons/mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="/icons/mstile-310x310.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
