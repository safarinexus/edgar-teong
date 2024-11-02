import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Providers } from "./providers";

const articulatFont = localFont({
  src: [
    {
      path: '/fonts/ArticulatCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Normal.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-DemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-ExtraBold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-ExtraBold.woff',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Heavy.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '/fonts/ArticulatCF-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
});

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
      <body
        className={`${articulatFont.className} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
