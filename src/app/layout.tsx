import type { Metadata } from "next";
import { Inter, Space_Mono, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bahar Türksoy - Frontend Developer & UI/UX Designer",
  description:
    "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, yaratıcı ve işlevsel çözümler geliştiren Frontend Developer.",
  keywords: [
    "frontend developer",
    "react",
    "typescript",
    "next.js",
    "ui/ux designer",
    "web development",
  ],
  authors: [{ name: "Bahar Türksoy" }],
  creator: "Bahar Türksoy",
  publisher: "Bahar Türksoy",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://baharturksoy.com",
    title: "Bahar Türksoy - Frontend Developer & UI/UX Designer",
    description:
      "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, yaratıcı ve işlevsel çözümler geliştiren Frontend Developer.",
    siteName: "Bahar Türksoy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahar Türksoy - Frontend Developer & UI/UX Designer",
    description:
      "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, yaratıcı ve işlevsel çözümler geliştiren Frontend Developer.",
    creator: "@baharturksoy",
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
      <body
        className={`${poppins.className} ${inter.className} ${spaceMono.className} ${jetbrainsMono.className}`}
      >
        {children}
      </body>
    </html>
  );
}
