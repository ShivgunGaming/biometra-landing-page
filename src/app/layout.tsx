import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MP Locksmith Pro - Денонощен ключар и автоключар в София",
  description:
    "Предлагаме денонощни ключарски услуги в София. Свържете се с нас за бързо и надеждно отключване, смяна на ключове и други ключарски услуги.",
  image: "/MP.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:alt" content={metadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="bg_BG" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
