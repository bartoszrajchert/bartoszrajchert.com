import BackgroundAmbient from '@/components/BackgroundAmbient';
import Navigation from '@/components/Navigation';
import '@/styles/globals.css';
import { EB_Garamond, Inter } from 'next/font/google';
import Head from 'next/head';

export const metadata = {
  title: 'Bartosz Rajchert Portfolio',
  description:
    'Bartosz Rajchert Portfolio, Front-end Developer, Product Designer, Design System, Creative Technologist'
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter'
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond'
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
        className={`${inter.variable} ${ebGaramond.variable} bg-dark-background text-dark-white font-sans`}
      >
        <Navigation />
        <div className="mx-auto max-w-[calc(456px+2rem)]">
          <div className="mx-4 border-l border-r border-dashed border-white/10 px-4 pb-[40px] pt-[40px]">
            {children}
          </div>
        </div>
        <BackgroundAmbient />
      </body>
    </html>
  );
}
