import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'; // Importa el componente Head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Shein Gifts",
 description: "Win free Gifts from Shein",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
    <>
      <Head>
        <link rel="icon" href="/public/shein.svg" /> 
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
 );
}