import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer"
import { Providers } from "./providers";

export const helveticaNeue = localFont({
  variable: '--font-helvetica-neue',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  src: [
    {
      path: './fonts/HelveticaNeue-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeue-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-HeavyItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeue-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeue-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeue-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeue-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-UltraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeue-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
  ],
})

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <base target="_blank"></base>
      </head>
      <body
        className={`${helveticaNeue.className} antialiased`}
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
