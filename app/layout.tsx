import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer"
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter_Tight } from 'next/font/google';

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <base target="_blank"></base>
      </head>
      <body
        className='antialiased'
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
