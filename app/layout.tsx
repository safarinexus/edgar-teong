import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer"
import { Providers } from "./providers";

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
