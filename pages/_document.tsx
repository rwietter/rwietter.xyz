/* eslint-disable no-return-await */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

const APP_NAME = 'next-pwa example';
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin';

export default class extends Document {
  static async getInitialProps(ctx: any) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <link rel="stylesheet dns-prefetch preconnect" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800&display=swap" />
          <link rel="stylesheet dns-prefetch preconnect" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap" />
          <link rel="stylesheet dns-prefetch preconnect" href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;600&display=swap" />
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
