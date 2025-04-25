import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navber";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevCabin",
  description: "We Build Code  With Class",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
       
          <link rel="icon" href="/public/logo.png" type="image/png" />
        </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
