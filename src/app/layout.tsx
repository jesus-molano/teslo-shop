import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";
import { Providers } from "@/providers/SessionProvider";

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Home - Teslo | Shop",
  },
  description: "Test E-Commerce created with Next JS for learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
