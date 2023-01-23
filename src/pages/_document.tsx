import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-background mx-5 max-w-[1120px] lg:mx-auto lg:px-4 xl:px-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
