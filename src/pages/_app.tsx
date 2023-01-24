import type { AppProps } from 'next/app';
import 'styles/globals.css';
import BackgroundAmbient from '@components/BackgroundAmbient';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundAmbient />
      <div className="page-width-adjustment">
        <Navigation />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
