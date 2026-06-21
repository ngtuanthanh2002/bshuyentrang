"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#van-de", label: "Vấn đề" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#benh-nhan", label: "Bệnh nhân" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "shadow-md shadow-slate-900/5" : "shadow-sm",
        )}
      >
        {/* Top bar — desktop */}
        <div className="hidden border-b border-slate-100 lg:block">
          <div className="container-main flex items-center justify-between py-2 text-xs text-slate-500">
            <div className="flex items-center gap-5">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-primary">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a>
              <span>{siteConfig.address}</span>
            </div>
            <span>{siteConfig.hours}</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-main flex h-16 items-center justify-between">
          <a href="#" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/images/doctor-logo.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0"
              priority
            />
            <span className="truncate text-sm font-bold text-slate-900 sm:text-[0.9375rem]">
              BS. Trần Huyền <span className="text-primary">Trang</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#dang-ky"
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:bg-primary-dark lg:inline-flex"
          >
            Đặt lịch miễn phí
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#dang-ky" onClick={() => setMenuOpen(false)} className="mt-3 flex w-full cursor-pointer items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-white">
              Đặt lịch miễn phí
            </a>
          </div>
        ) : null}
      </header>

      <div aria-hidden className="h-[var(--header-height)] shrink-0" />
    </>
  );
}
