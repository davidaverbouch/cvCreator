import { Header } from '@/components/header';
import { Metadata } from 'next';
import './globals.css';
import classes from './layout.module.css';

export const metadata: Metadata = {
  title: 'Curriculum vitae',
  description: 'curricum vitae',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  );
}
