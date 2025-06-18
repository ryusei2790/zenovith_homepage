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
  title: "Zenovith Homepage",
  description: "Zenovithの公式ホームページです。",
  keywords: ["Zenovith", "ホームページ", "ポートフォリオ", "ブログ運営", "SNS運営", "アプリ制作", "テクノロジー", "イノベーション", "システム制作", "デザイン", "design", "development", "system", "blog", "sns", "app", "technology", "innovation"],
  authors: [{ name: "Zenovith" }],
  creator: "Zenovith",
  publisher: "Zenovith",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zenovith.com"),
  openGraph: {
    title: "Zenovith Homepage",
    description: "Zenovithの公式ホームページです。",
    url: "https://zenovith.com",
    siteName: "Zenovith Homepage",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenovith Homepage",
    description: "Zenovithの公式ホームページです。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
