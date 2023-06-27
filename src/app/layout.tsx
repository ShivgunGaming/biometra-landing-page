import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MP Locksmith Pro - Денонощен ключар и автоключар в София",
  description:
    "Предлагаме денонощни ключарски услуги в София. Свържете се с нас за бързо и надеждно отключване, смяна на ключове и други ключарски услуги.",
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
