import BackgroundAmbient from '@/components/BackgroundAmbient';
import Navigation from '@/components/Navigation';
import '@/styles/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';

export const metadata = {
  title: 'Bartosz Rajchert Portfolio',
  description:
    'Bartosz Rajchert Portfolio, Front-end Developer, Product Designer, Design System, Creative Technologist'
};

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-geist'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-geist-mono'
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
        className={`${geist.variable} ${geistMono.variable} bg-background dark:bg-dark-background dark:text-dark-white font-sans`}
      >
        <Navigation />
        <BackgroundAmbient />
        <div className="mx-auto max-w-[calc(456px+2rem)]">
          <div className="mx-4 border-l border-r border-dashed border-white/10 px-4 pb-[40px] pt-[40px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
