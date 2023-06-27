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
      <head />
      <head>
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:image" content="/twitter-image.png>" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="600" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
