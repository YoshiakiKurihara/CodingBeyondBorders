import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { css } from   '../../styled-system/css';
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Beyond Borders",
  description: "Bringing Your Ideas and Ambitions to Life — Anywhere in the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <div className={css({minHeight: '100vh', display: 'flex', flexDirection: 'column', bg: 'slate.100',})}>
          <LanguageProvider>
            {/* Header */}
            <header className={css({bg: 'slate.800', color: 'white', p: 3, fontSize: 'xl',})}>
              <Header />
            </header>

            {/* Main area */} 
            {/* サイドバーがはみ出ないように */}
            <div className={css({flex: '1', display: 'flex', flexDirection: 'row', overflow: 'hidden', })}>
              {/* Left Sidebar */}
              {/* モバイル対応を考えて非表示スタートでもOK */}
              <aside className={css({width: '250px', bg: 'slate.600', color: 'white', p: 4, display: 'none', md: { display: 'block' },})}>
                <LeftSidebar />
              </aside>

              {/* Main Content */}
              <main className={css({flex: '1', bg: 'slate.200', p: 4,})}>
                {children}
              </main>

              {/* Right Sidebar */}
              {/* 同じくモバイル対応 */}
              <aside className={css({ width: '100px', bg: 'slate.600', color: 'white', p: 4, display: 'none', md: { display: 'block' },})}>
                <RightSidebar />
              </aside>
            </div>

            {/* Footer */}
            <footer className={css({ bg: 'slate.800', color: 'white', p: 2,})}>
              <Footer />
            </footer>
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
