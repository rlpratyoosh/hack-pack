import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
