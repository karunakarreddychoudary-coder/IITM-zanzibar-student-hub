
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
    <header className="navbar">
      <div className="navbar-inner">

        {/* MOBILE MENU - FAR LEFT */}
        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* LOGO */}
        <Link href="/" className="navbar-brand">
          <span className="brand-top">IIT MADRAS</span>
          <strong className="brand-bottom">ZANZIBAR</strong>
        </Link>

        {/* DESKTOP LINKS */}
        <nav className="navbar-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* SENIOR PORTAL */}
        <Link href="/login" className="senior-button">
          Senior Portal
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="mobile-senior"
            onClick={() => setOpen(false)}
          >
            Senior Portal
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: relative;
          z-index: 1000;
          width: 100%;
          background: #f7f5ef;
          border-bottom: 1px solid rgba(8, 10, 13, 0.1);
        }

        .navbar-inner {
          position: relative;
          min-height: 104px;
          padding: 0 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .navbar-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
          color: #080a0d;
          text-decoration: none;
          white-space: nowrap;
        }

        .brand-top {
          display: block;
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.28em;
          color: rgba(8, 10, 13, 0.55);
        }

        .brand-bottom {
          display: block;
          font-size: 20px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        /* DESKTOP NAVIGATION */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 31px;
          margin-left: auto;
          margin-right: 35px;
        }

        .navbar-links a {
          color: #080a0d;
          font-size: 14px;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .navbar-links a:hover {
          opacity: 0.55;
        }

        /* SENIOR BUTTON */
        .senior-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 20px;
          border: 1px solid #080a0d;
          border-radius: 999px;
          background: #080a0d;
          color: white;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
        }

        .senior-button:hover {
          background: transparent;
          color: #080a0d;
        }

        /* MOBILE MENU BUTTON */
        .mobile-menu-button {
          display: none;
          border: 0;
          padding: 0;
          background: transparent;
          color: #080a0d;
        }

        .mobile-menu {
          display: none;
        }

        /* TABLET */
        @media (max-width: 1000px) {
          .navbar-links {
            gap: 18px;
            margin-right: 18px;
          }

          .navbar-links a {
            font-size: 12px;
          }
        }

        /* MOBILE */
        @media (max-width: 800px) {
          .navbar-inner {
            min-height: 132px;
            padding: 0 24px;
            justify-content: center;
          }

          /* FORCE MENU TO FAR LEFT */
          .mobile-menu-button {
            display: flex !important;
            position: absolute !important;
            left: 24px !important;
            right: auto !important;
            top: 50%;
            transform: translateY(-50%);
            z-index: 20;
            align-items: center;
            justify-content: center;
          }

          /* LOGO */
          .navbar-brand {
            gap: 12px;
            align-items: flex-start;
          }

          .brand-top {
            font-size: 9px;
            letter-spacing: 0.2em;
          }

          .brand-bottom {
            font-size: 21px;
          }

          /* HIDE DESKTOP SENIOR PORTAL AND LINKS */
          .navbar-links,
          .senior-button {
            display: none !important;
          }

          /* MOBILE DROPDOWN */
          .mobile-menu {
            display: flex;
            flex-direction: column;
            padding: 12px 24px 24px;
            background: #f7f5ef;
            border-top: 1px solid rgba(8, 10, 13, 0.08);
          }

          .mobile-menu a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 17px 0;
            border-bottom: 1px solid rgba(8, 10, 13, 0.1);
            color: #080a0d;
            font-size: 15px;
            text-decoration: none;
          }

          .mobile-senior {
            font-weight: 500;
          }
        }
      `}</style>
    </header>
  );
}
