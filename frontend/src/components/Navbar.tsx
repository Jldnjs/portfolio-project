"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Intro", href: "/", match: (path: string) => path === "/" },
  {
    label: "Career",
    href: "/resume",
    match: (path: string) => path.startsWith("/resume"),
  },
  {
    label: "Projects",
    href: "/project/list",
    match: (path: string) => path.startsWith("/project"),
  },
  {
    label: "Chat",
    href: "/chat",
    match: (path: string) => path.startsWith("/chat"),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TopNavBar (Floating Island - Cute Mode) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-container-max rounded-full bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md shadow-xl border-none cute-shadow z-50 justify-between items-center px-8 py-3 hidden md:flex">
        <Link
          href="/"
          className="font-display-lg text-headline-md tracking-tighter text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity"
        >
          CreatorPort
        </Link>
        <div className="flex gap-6 items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-primary dark:text-primary-fixed font-bold border-b-2 border-primary hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95"
                    : "text-on-surface-variant dark:text-outline hover:text-primary hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div>
          <Link
            href="/resume"
            className="inline-block bg-error-container text-on-error-container rounded-full px-6 py-2 font-body-base font-bold cute-button-shadow hover:scale-105 transition-transform duration-200 active:scale-95"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Mobile Nav Header (Simplified) */}
      <header className="md:hidden flex flex-col bg-surface sticky top-0 z-40 cute-shadow rounded-b-3xl mb-stack-md">
        <div className="flex justify-between items-center p-margin-mobile">
          <Link
            href="/"
            className="font-display-lg-mobile text-headline-md tracking-tighter text-primary"
          >
            CreatorPort
          </Link>
          <button
            className="text-primary"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "32px" }}
            >
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="flex flex-col gap-3 px-6 pb-6 border-t border-outline-variant/20 pt-3">
            {NAV_ITEMS.map((item) => {
              const isActive = item.match(pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    isActive
                      ? "text-primary font-bold py-1"
                      : "text-on-surface-variant hover:text-primary py-1"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-error-container text-on-error-container rounded-full px-6 py-2 font-body-base font-bold cute-button-shadow text-center mt-2"
            >
              Hire Me
            </Link>
          </div>
        )}
      </header>

      {/* Floating AI Chatbot Icon */}
      {!pathname.startsWith("/chat") && (
        <div
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center animate-bounce group"
          style={{ animationDuration: "3s" }}
        >
          <div className="bg-surface text-on-surface-variant text-xs font-bold px-3 py-2 rounded-2xl rounded-br-none cute-shadow mb-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-default">
            안녕! 궁금한게 있니?
          </div>
          <Link
            href="/chat"
            aria-label="Open AI Chatbot"
            className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container cute-shadow hover:scale-110 transition-transform active:scale-95 border-4 border-surface-container-lowest"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "32px", fontVariationSettings: "'FILL' 1" }}
            >
              smart_toy
            </span>
          </Link>
        </div>
      )}
    </>
  );
}

