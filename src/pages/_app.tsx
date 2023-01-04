import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';
import BackgroundAmbient from '@/components/BackgroundAmbient';

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
