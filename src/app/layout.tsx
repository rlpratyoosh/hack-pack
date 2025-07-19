import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackPack - Next.js Boilerplate",
  description: "This is a boilerplate for a Next.js app with Clerk authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="dark">
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
