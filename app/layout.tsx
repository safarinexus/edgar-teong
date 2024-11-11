import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer"
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Edgar Teong",
  description: "Edgar's personal website, created with Nextjs \& GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <base target="_blank"></base>
        <link rel="icon" href="/favicon.ico" />
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
