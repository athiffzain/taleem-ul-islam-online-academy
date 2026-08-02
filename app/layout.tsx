import type { Metadata } from "next";
import { Amiri, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const amiri = Amiri({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taleemulislamonline.org"),
  title: {
    default: "Taleem Ul Islam Online Academy | Learn Qur'an with Tajweed Online",
    template: "%s | Taleem Ul Islam Online Academy",
  },
  description:
    "Taleem Ul Islam Online Academy is the official online branch of Madresa-e-Taleem Ul Islam, Bengaluru. Learn Noorani Qaida, Nazira Qur'an, and Hifz-ul-Qur'an with Tajweed from certified male and female teachers, anywhere in the world.",
  keywords: [
    "online Quran classes",
    "Tajweed course",
    "Noorani Qaida online",
    "Hifz ul Quran",
    "Nazira Quran",
    "Islamic academy Bengaluru",
    "Madresa Taleem Ul Islam",
  ],
  authors: [{ name: "Taleem Ul Islam Online Academy" }],
  openGraph: {
    title: "Taleem Ul Islam Online Academy",
    description: "Learn Qur'an with Tajweed from Anywhere in the World.",
    type: "website",
    locale: "en_IN",
    siteName: "Taleem Ul Islam Online Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taleem Ul Islam Online Academy",
    description: "Learn Qur'an with Tajweed from Anywhere in the World.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${amiri.variable} ${inter.variable}`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-masjid-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
