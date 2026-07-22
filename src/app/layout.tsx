import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gligx Web Design & Software Development Company Dubai, UAE",
  description:
    "Gligx is a Dubai technology company building websites, software, mobile apps, SEO, PPC, hosting, branding, and digital systems for UAE and GCC businesses.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
