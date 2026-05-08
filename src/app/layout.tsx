import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pearl Land Safaris - Admin Dashboard",
  description: "Professional tourism operations dashboard for managing bookings, tour packages, payments, and customer communications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
