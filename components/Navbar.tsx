
"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    { name: "Resources", href: "/resources" },
    { name: "Things to Carry", href: "/things-to-carry" },
    { name: "Zanzibar", href: "/zanzibar-guide" },
    { name: "Student Life", href: "/student-life" },
  ];

  return (
    <>
      <header className="navbar">
        <Link href="/" className="brand">
          <span className="brand-top">IIT MADRAS</span>
          <span className="brand-bottom">ZANZIBAR</span>
        </Link>

        <nav className="nav-links">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/login" className="senior-button">
          Senior Portal
          <ArrowUpRight size={16} />
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/login" onClick={() => setOpen(false)}>
            Senior Portal ↗
          </Link>
        </div>
      )}

      <style jsx>{`
        .navbar {
          height: 104px;
          padding: 0 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f7f5ef;
          border-bottom: 1px solid rgba(8, 10, 13, 0.1);
          position: relative;
          z-index: 100;
        }

        .brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          color: #080a0d;
          line-height: 1;
        }

        .brand-top {
          display: block;
          font-size: 10px;
          letter-spacing: 0.28em;
          white-space: nowrap;
          color: rgba(8, 10, 13, 0.55);
        }

        .brand-bottom {
          display: block;
          margin-top: 10px;
          font-size: 19px;
          font-weight: 500;
          letter-spacing: -0.04em;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 31px;
          margin-left: auto;
          margin-right: 35px;
        }

        .nav-links a {
          color: #080a0d;
          text-decoration: none;
          font-size: 14px;
          white-space: nowrap;
        }

        .senior-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 20px;
          border-radius: 999px;
          background: #080a0d;
          color: white;
          text-decoration: none;
          font-size: 13px;
          white-space: nowrap;
        }

        .menu-button,
        .mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .nav-links,
          .senior-button {
            display: none;
          }

          .menu-button {
            display: block;
            border: none;
            background: transparent;
            color: #080a0d;
          }

          .navbar {
            height: 82px;
            padding: 0 24px;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 10px 24px 24px;
            background: #f7f5ef;
            border-bottom: 1px solid rgba(8, 10, 13, 0.1);
          }

          .mobile-menu a {
            padding: 16px 0;
            color: #080a0d;
            text-decoration: none;
            border-bottom: 1px solid rgba(8, 10, 13, 0.1);
          }
        }
      `}</style>
    </>
  );
}
