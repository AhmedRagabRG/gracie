import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gracie Reticulation Services | Perth Irrigation Experts",
  description: "Father–son team delivering precision irrigation diagnostics and water-efficient repairs. Based in Carramar, servicing the northern suburbs of Perth. Expert reticulation services for residential and light commercial properties.",
  keywords: [
    "Gracie Reticulation",
    "Perth reticulation",
    "irrigation repairs Perth",
    "sprinkler systems Perth",
    "reticulation Perth",
    "irrigation diagnostics",
    "water efficient irrigation",
    "Perth irrigation services",
  ],
  openGraph: {
    title: "Gracie Reticulation Services | Perth Irrigation Experts",
    description: "Expert irrigation and reticulation services across Perth. Precision diagnostics, water-efficient repairs, and professional installations by Gracie Reticulation Services.",
    type: "website",
    locale: "en_AU",
    url: "https://www.graciereticulation.com.au",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
