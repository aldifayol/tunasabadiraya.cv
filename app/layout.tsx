import type React from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CV Tunas Abadi Raya - Software Engineering & Enterprise Architecture",
    template: "%s | CV Tunas Abadi Raya",
  },
  description:
    "Mitra rekayasa perangkat lunak enterprise, modernisasi arsitektur komputasi awan, dan transformasi digital berstandar global dengan keandalan operasional tingkat tinggi.",
  keywords: [
    "IT consulting",
    "tunasabadiraya",
    "tarofficial",
    "cvtar",
    "software development manado",
    "tunas abadi raya",
    "software house manado",
    "government contractor manado",
    "jasa pembuatan aplikasi manado",
    "jasa pembuatan website manado",
  ],
  verification: {
    other: {
      "facebook-domain-verification": ["r80cdeacxh6o9vf6kdoyf1igpylafx"],
      "google-site-verification": ["zfiYbEWGkt5K86nzJ-IpH7MmeM4eqHT8D4dUJaf_7Oc"],
    },
  },
  openGraph: {
    title: "CV Tunas Abadi Raya - Software Engineering & Enterprise Architecture",
    description:
      "Mitra rekayasa perangkat lunak enterprise, modernisasi arsitektur komputasi awan, dan transformasi digital berstandar global dengan keandalan operasional tingkat tinggi.",
    url: "https://tunasabadiraya.cloud",
    images: [
      {
        url: "https://tunasabadiraya.cloud/tar-office.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Tunas Abadi Raya - Software Engineering & Enterprise Architecture",
    description:
      "Mitra rekayasa perangkat lunak enterprise, modernisasi arsitektur komputasi awan, dan transformasi digital berstandar global dengan keandalan operasional tingkat tinggi.",
    creator: "@ldifayol",
    images: ["https://tunasabadiraya.cloud/tar-office.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-48.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased bg-surface text-on-surface`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
