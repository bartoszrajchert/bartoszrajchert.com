import BackgroundAmbient from '@components/BackgroundAmbient';
import Navigation from '@components/Navigation';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundAmbient />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
