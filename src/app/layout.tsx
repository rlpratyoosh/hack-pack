import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackPack - Next.js Boilerplate",
  description: "This is a boilerplate for a Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
