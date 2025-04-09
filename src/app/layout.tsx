import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iswara - Kopi, Vanili, dan Gaharu Premium dari Pak Is",
  description: "Produk berkualitas tinggi dari lereng gunung Telomoyo yang dibudidayakan dengan penuh dedikasi oleh Pak Is.",
  keywords: 'kopi telomoyo, vanili telomoyo, kopi premium, vanili premium, kopi magelang, vanili magelang, kopi semarang, vanili semarang, kopi banyubiru, vanili banyubiru, kopi wirogomo, vanili wirogomo, kopi kendal duwur, vanili kendal duwur',
  authors: [{ name: 'Pak Is' }],
  creator: 'Pak Is',
  publisher: 'Iswara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Iswara - Kopi & Vanili Premium dari Telomoyo',
    description: 'Produsen kopi dan vanili premium dari lereng Gunung Telomoyo. Produk berkualitas tinggi dengan proses budidaya ramah lingkungan.',
    url: 'https://iswara.com',
    siteName: 'Iswara',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iswara - Kopi & Vanili Premium dari Telomoyo',
    description: 'Produsen kopi dan vanili premium dari lereng Gunung Telomoyo. Produk berkualitas tinggi dengan proses budidaya ramah lingkungan.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googledb8a0ce45a6c065b',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
