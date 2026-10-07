import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://adhdceos.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ADHD for CEOs",
  description:
    "A community for ADHD entrepreneurs, founders, and unconventional thinkers. Different minds can build extraordinary things when they have the right environment.",
  keywords: [
    "ADHD",
    "entrepreneurs",
    "founders",
    "CEOs",
    "ADHD leadership",
    "neurodivergent founders",
    "ADHD professionals",
  ],
  authors: [{ name: "ADHD for CEOs", url: siteUrl }],
  creator: "ADHD for CEOs",
  publisher: "ADHD for CEOs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ADHD for CEOs",
    title: "ADHD for CEOs",
    description:
      "A community for ADHD entrepreneurs, founders, and unconventional thinkers. Different minds can build extraordinary things.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADHD for CEOs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHD for CEOs",
    description:
      "A community for ADHD entrepreneurs, founders, and unconventional thinkers.",
    images: ["/og-image.jpg"],
    site: "@adhdceos",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
