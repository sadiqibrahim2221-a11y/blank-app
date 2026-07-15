import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'SICA - Science, Innovation & Collaboration Alliance',
  description: 'Where Minds Meet, Science Moves. Building Africa\'s next generation of scientists, innovators, and institution builders.',
  keywords: [
    'science',
    'innovation',
    'Africa',
    'research',
    'entrepreneurship',
    'mentorship',
    'education',
  ],
  openGraph: {
    title: 'SICA Platform',
    description: 'Where Minds Meet, Science Moves.',
    url: 'https://sica.example.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sica-light">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
