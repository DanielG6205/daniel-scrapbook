import "./globals.css";
import { Metadata } from "next";
import ProgressNav from "./components/ProgressNav";
import DotField from "./components/DotField";

export const metadata: Metadata = {
  title: "The Museum of Me",
  description: "A Developmental Psychology Exhibit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DotField />
        {/* FULL-WIDTH NAVBAR */}
        <ProgressNav />

        {/* PAGE CONTENT */}
        <main className="animate-fade pt-[180px]">
          {children}
        </main>

        <footer className="site-footer">
          © 2026 Daniel&apos;s Scrapbook
        </footer>
      </body>
    </html>
  );
}
