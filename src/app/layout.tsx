import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoldSpectra AI | منصة الاستكشاف الطيفي للذهب",
  description:
    "منصة SaaS متقدمة لتحليل مؤشرات التحول الحراري المائي المرتبطة بالذهب باستخدام ASTER و Sentinel-2 و Hyperspectral + Prospectivity Mapping هجين. تدعم معايير JORC و NI 43-101.",
  keywords: [
    "gold exploration",
    "spectral analysis",
    "ASTER",
    "Sentinel-2",
    "hyperspectral",
    "prospectivity mapping",
    "JORC",
    "استكشاف الذهب",
    "تحليل طيفي",
  ],
  openGraph: {
    title: "GoldSpectra AI | منصة الاستكشاف الطيفي للذهب",
    description: "أقوى منصة تحليل طيفي تجارية لاستكشاف الذهب",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
