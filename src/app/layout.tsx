import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bahar Turksoy - Frontend Developer",
  description:
    "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, yaratıcı ve işlevsel çözümler geliştiren Frontend Developer.",
  keywords: [
    "frontend developer",
    "react",
    "typescript",
    "next.js",
    "web development",
  ],
  authors: [{ name: "Bahar Turksoy" }],
  creator: "Bahar Turksoy",
  publisher: "Bahar Turksoy",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://baharturksoy.com",
    title: "Bahar Turksoy - Frontend Developer",
    description:
      "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, yaratıcı ve işlevsel çözümler geliştiren Frontend Developer.",
    siteName: "Bahar Turksoy Portfolio",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Single+Day&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
