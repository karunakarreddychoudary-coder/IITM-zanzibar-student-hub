"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Resources", href: "/resources" },
  { label: "Things to Carry", href: "/things-to-carry" },
  { label: "Zanzibar", href: "/zanzibar-guide" },
  { label: "Student Life", href: "/student-life" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f0]/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          onClick={closeMenu}
        >
          <div className="text-[11px] font-semibold tracking-[0.22em] text-black/50">
            IIT MADRAS
          </div>

          <div className="text-lg font-semibold tracking-tight">
            ZANZIBAR
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop portal */}
        <Link
          href="/login"
          className="hidden items-center gap-2 rounded-full bg-[#0b1220] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 md:flex"
        >
          Senior Portal
          <ArrowUpRight size={15} />
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/10 bg-[#f7f5f0] md:hidden">

          <div className="mx-auto max-w-7xl px-6 py-5">

            <div className="space-y-1">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3.5 text-sm font-medium transition hover:bg-black/5"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-between rounded-xl bg-[#0b1220] px-4 py-3.5 text-sm font-medium text-white"
              >
                Senior Portal
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}