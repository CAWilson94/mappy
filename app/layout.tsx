import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mappy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
          <div className="mb-2 sm:mb-0">
            <a
              href="#"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              About
            </a>          
          </div>
        </nav>
        {children}
        
        </body>
      
    </html>
  );
}
