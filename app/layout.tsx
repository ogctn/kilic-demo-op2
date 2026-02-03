import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilal Kılıç Enerji | İklim Kanunu ve Sürdürülebilirlik Danışmanlığı",
  description: "İklim Kanunu uyum süreçleri, YİDEP danışmanlığı, Su Verimliliği Raporlaması ve Yapay Zeka destekli enerji yönetimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
