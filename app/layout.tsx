import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
//import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Edgar Teong",
  description: "Edgar's personal website, created with Nextjs \& GSAP.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-black.webp',
        href: '/favicon-black.webp',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-white.webp',
        href: '/favicon-white.webp',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {/*<Providers>*/}
          <Navbar />
          {children}
        {/*</Providers>*/}
      </body>
    </html>
  );
}
