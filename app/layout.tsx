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

// 1. تحديث الـ metadata وتغيير الاسم ووصف الموقع مع إضافة الـ colorScheme
export const metadata: Metadata = {
  title: "SDAN Network",
  description: "Scientific Dental Advancement Network",
  colorScheme: "light", // هذا يخبر المتصفح أن الموقع مصمم للنمط الفاتح فقط
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. إضافة التنسيق العالي (style="color-scheme: light") لضمان عدم قلب الألوان في الموبايل
    <html
      lang="en"
      style={{ colorScheme: 'light' }}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}