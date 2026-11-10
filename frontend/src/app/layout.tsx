import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreatorPort - Cute Portfolio",
  description: "A cute portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} bg-surface text-on-surface font-body-base overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        <Navbar />

        {children}

        {/* Footer */}
        <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full rounded-t-[3rem] bg-surface-container-low dark:bg-surface-container-low mt-stack-lg">
          <div className="flex flex-col md:flex-row justify-between items-center py-stack-md px-margin-mobile max-w-container-max mx-auto">
            <div className="font-display-lg-mobile text-body-base text-primary mb-4 md:mb-0">
              CreatorPort
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <a
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                GitHub
              </a>
              <a
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Email
              </a>
              <a
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Twitter
              </a>
            </div>
            <div className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed">
              © 2024 CreatorPort. Built with Heart and Logic.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}