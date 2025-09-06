import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rawad Nounou',
  description: 'Professional portfolio of Rawad Nounou, a software engineer specializing in web development and mobile applications. Explore my projects and get in touch.',
  keywords: 'Rawad Nounou, Software Engineer, Web Developer, React, Next.js, Portfolio',
  authors: [{ name: 'Rawad Nounou' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Rawad Nounou - Software Engineer',
    description: 'A professional portfolio featuring modern web and mobile applications. Discover my projects and feel free to get in touch',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rawad Nounou - Software Engineer',
    description: 'A professional portfolio featuring modern web and mobile applications. Discover my projects and feel free to get in touch',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
  <div className="background-animated" />
          {children}
        <Toaster />
      </body>
    </html>
  );
}
