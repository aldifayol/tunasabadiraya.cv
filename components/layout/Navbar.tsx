"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import TarLogo from "@/components/tarLogo";

const navLinks = [
  { label: "Layanan", href: "/#layanan" },
  { label: "Keunggulan", href: "/#keunggulan" },
  { label: "Metodologi", href: "/#metodologi" },
  { label: "Portofolio", href: "/#portofolio" },
  { label: "Skema Proyek", href: "/#skema-proyek" },
  { label: "Legal & SLA", href: "/spesifikasi-legal" },
  { label: "Kontak", href: "/#konsultasi" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-border-hairline transition-colors duration-200">
      <div className="h-[76px] max-w-[1340px] mx-auto px-4 lg:px-6 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#532792] dark:bg-[#6D35BC] flex items-center justify-center p-1.5 text-white shadow-sm ring-1 ring-white/15 shrink-0 transition-transform group-hover:scale-105">
              <TarLogo className="w-full h-full" />
            </div>
            <span className="font-jakarta font-bold text-base xl:text-lg tracking-tight text-on-surface leading-tight whitespace-nowrap">
              Tunas Abadi Raya
            </span>
          </Link>

          <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider whitespace-nowrap shrink-0 border border-[#532792]/20 bg-[#532792]/[0.06] text-[#532792] dark:border-[#A78BFA]/40 dark:bg-[#1E293B] dark:text-[#E2E8F0] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#532792] dark:bg-[#A78BFA]" />
            <span>ID · B2B TECH PARTNER</span>
          </div>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors py-1 whitespace-nowrap shrink-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Light / Dark Mode Toggle Pill */}
          <div
            aria-label="Theme Switcher"
            className="flex items-center bg-surface-container-low border border-border-hairline rounded-full p-0.5"
            role="group"
          >
            <button
              type="button"
              aria-label="Switch to Light Mode"
              onClick={() => setTheme("light")}
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                mounted && !isDark
                  ? "bg-surface-container-lowest text-on-surface shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Switch to Dark Mode"
              onClick={() => setTheme("dark")}
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                isDark
                  ? "bg-primary-container text-white shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Primary CTA Button */}
          <Link
            href="/#konsultasi"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 h-10 bg-primary-container hover:bg-brand-violet-vivid text-on-primary font-medium text-sm rounded-lg border border-primary-container transition-colors shadow-xs whitespace-nowrap shrink-0"
          >
            <span>Diskusi Proyek</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-hairline bg-surface-container-lowest/98 backdrop-blur-xl px-4 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-border-hairline">
              <span className="font-mono text-xs text-secondary uppercase font-semibold">
                Navigasi Platform
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider whitespace-nowrap shrink-0 border border-[#532792]/20 bg-[#532792]/[0.06] text-[#532792] dark:border-[#A78BFA]/40 dark:bg-[#1E293B] dark:text-[#E2E8F0] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#532792] dark:bg-[#A78BFA]" />
                <span>ID · B2B TECH PARTNER</span>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-secondary text-sm">→</span>
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/#konsultasi"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-container hover:bg-brand-violet-vivid text-on-primary font-semibold text-sm rounded-lg transition-colors shadow-xs"
              >
                <span>Diskusi Proyek</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
