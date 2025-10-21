import type { Metadata } from 'next';
import { Nunito, Rubik } from 'next/font/google';
import './globals.css';
import { metadataCompany } from './constants/constants';
import { ScrollToTopProvider } from '../components/ScrollToTopProvider';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  metadataBase: new URL(metadataCompany.metadataBase),
  title: metadataCompany.title,
  description: metadataCompany.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body
        className={`${nunito.variable} ${rubik.variable} font-nunito bg-color-bg-primary text-color-text antialiased`}
      >
        <ScrollToTopProvider />
        {children}
      </body>
    </html>
  );
}
