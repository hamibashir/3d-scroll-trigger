import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostar city",
  description: "A cinematic three-screen scroll story for Mostar city.",
  icons: { icon: "data:," },
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
