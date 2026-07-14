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
  title: "India's Art | Authentic Indian Handicrafts & Handmade Products",
  description:
    "Discover authentic Indian handicrafts, handmade home decor, traditional paintings, sculptures, pottery, textiles, and artisan-made products. Shop unique creations from skilled Indian artisans.",
  keywords: [
    "Indian handicrafts",
    "handmade products",
    "Indian art",
    "artisan products",
    "home decor",
    "traditional paintings",
    "wooden crafts",
    "pottery",
    "handloom",
    "gift items",
    "India's Art",
    "indiasart",
  ],
  authors: [{ name: "India's Art" }],
  creator: "India's Art",
  publisher: "India's Art",
  applicationName: "India's Art",
  category: "Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
