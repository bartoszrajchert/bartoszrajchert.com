import { Footer } from '@/components/footer';
import { PageStaggerMotion } from '@/components/page-stagger-motion';
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Bartosz Rajchert Portfolio',
  description:
    'Bartosz Rajchert Portfolio, Front-end Developer, Product Designer, Design System, Creative Technologist',
  icons: {
    icon: '/favicon.ico',
  },
};

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background dark:bg-dark-background text-foreground dark:text-dark-white font-sans`}
      >
        <PageStaggerMotion />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-6 max-w-[60ch] space-y-14 pt-[40px] pb-[40px] sm:mx-auto">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
