import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apriyadi — Full-Stack Developer | Portfolio",
  description:
    "Personal portfolio of a Full-Stack Developer building modern, scalable, and user-friendly digital experiences through clean code and thoughtful engineering.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "Jakarta Developer",
  ],
  authors: [{ name: "Apriyadi" }],
  creator: "Apriyadi",
  openGraph: {
    title: "Apriyadi — Full-Stack Developer Portfolio",
    description:
      "Modern, scalable, and user-friendly digital experiences through clean code and thoughtful engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Apriyadi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apriyadi — Full-Stack Developer Portfolio",
    description:
      "Full-Stack Developer specializing in Next.js, React, TypeScript, and modern backend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground min-h-screen antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

