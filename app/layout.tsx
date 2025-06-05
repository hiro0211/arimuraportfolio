import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "有村大旭 - AIエンジニアポートフォリオ",
  description: "エンジニア × スピード × 実行力。AI技術を活用した超高速開発と実行力で価値を生み出す有村大旭のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
