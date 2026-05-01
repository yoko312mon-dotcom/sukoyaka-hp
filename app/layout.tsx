import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "サポートセンターすこやか | 障がい者向け訪問介護・同行援護",
  description:
    "埼玉県西部エリア（狭山市・所沢市・入間市・日高市ほか）の障がいのある方の在宅生活をサポートします。居宅介護・同行援護・デイサービスを提供しています。",
  keywords:
    "障がい 訪問介護 居宅介護 同行援護 デイサービス 狭山市 所沢市 入間市 埼玉",
  openGraph: {
    title: "サポートセンターすこやか",
    description:
      "障がいのある方の「自分らしい毎日」をサポートします。埼玉県西部エリアの訪問介護・同行援護・デイサービス事業所です。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
