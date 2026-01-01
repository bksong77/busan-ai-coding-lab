import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "부산AI코딩랩",
  description: "부산 경남 최고의 AI 코딩 전문 교육 기관",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


// app/layout.tsx

export const metadata = {
  title: "부산AI코딩랩 | AI·코딩을 진로와 실무에 연결하다",
  description:
    "부산AI코딩랩은 학생·성인을 위한 실전형 AI·코딩 교육 공간입니다. 엔트리, 파이썬, 바이브코딩, 웹개발, AI이해, AI활용까지 커리큘럼을 제공합니다.",
  openGraph: {
    title: "부산AI코딩랩",
    description: "AI·코딩을 진로와 실무에 연결하다",
    url: "https://busan-ai-coding-lab.vercel.app",
    siteName: "부산AI코딩랩",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "부산AI코딩랩",
      },
    ],
    type: "website",
  },
};

