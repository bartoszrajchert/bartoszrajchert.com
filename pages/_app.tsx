import type { AppProps } from 'next/app';
import BackgroundAmbient from '@components/BackgroundAmbient';
import Footer from '@components/Footer';
import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundAmbient />
      <div className="page-width-adjustment">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
