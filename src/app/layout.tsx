import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './components/Header'
import LeftSidebarWrapper from './components/LeftSidebarWrapper'
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
        <div className="min-h-screen flex flex-col bg-slate-100">
          <LanguageProvider>
            {/* Header */}
            <header className="bg-slate-800 text-white p-3 text-xl">
              <Header />
            </header>

            {/* Main area */} 
            <div className="flex-1 flex flex-row overflow-hidden">
              {/* Left Sidebar */}
              <aside className="w-[250px] bg-slate-600 text-white p-4 hidden md:block">
                <LeftSidebarWrapper />
              </aside>
              
              {/* Main Content */}
              <main className="flex-1 bg-slate-200 p-4">
                {children}
              </main>

              {/* Right Sidebar */}
              <aside className="w-[150px] bg-slate-600 text-white p-4 hidden md:block">
                <RightSidebar />
              </aside>
            </div>

            {/* Footer */}
            <footer className="bg-slate-800 text-white p-2">
              <Footer />
            </footer>
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
