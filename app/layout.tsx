import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
//import { Providers } from "./providers";

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
