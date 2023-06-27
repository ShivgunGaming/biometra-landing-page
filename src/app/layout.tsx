import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const title = "MP Locksmith Pro - Денонощен ключар и автоключар в София";
const description =
  "Предлагаме денонощни ключарски услуги в София. Свържете се с нас за бързо и надеждно отключване, смяна на ключове и други ключарски услуги.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@AlexRG",
  },
  metadataBase: new URL("https://mp-aleksrg.vercel.app/"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
