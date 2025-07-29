import { IBM_Plex_Sans } from 'next/font/google';
import Head from 'next/head';
import BackgroundAmbient from '@components/BackgroundAmbient';
import Footer from '@components/Footer';
import '@styles/globals.css';

export const metadata = {
  title: 'Bartosz Rajchert Portfolio',
  description:
    'Bartosz Rajchert Portfolio, Front-end Developer, Product Designer, Design System, Creative Technologist'
};

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${IBMPlexSans.className} bg-background dark:bg-dark-background dark:text-dark-white`}
      >
        <BackgroundAmbient />
        <div className="page-width-adjustment">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
