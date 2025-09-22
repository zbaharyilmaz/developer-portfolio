import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bahar Turksoy - Software Developer",
  description:
    "Software Developer who develops creative and functional solutions with modern web technologies, prioritizing user experience.",
  keywords: [
    "software developer",
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
    url: "https://bahar-turksoy-portfolio.vercel.app/",
    title: "Bahar Turksoy - Software Developer",
    description:
      "Software Developer who develops creative and functional solutions with modern web technologies, prioritizing user experience.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Single+Day&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
