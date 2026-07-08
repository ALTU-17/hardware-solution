import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardware Solution",
  description: "Luxury Interior Hardware Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}