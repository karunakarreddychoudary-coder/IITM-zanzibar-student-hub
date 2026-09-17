
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

        {/* MOBILE MENU — LEFT */}
        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* LOGO */}
        <Link href="/" className="navbar-brand">
          <span>IIT MADRAS</span>
          <strong>ZANZIBAR</strong>
        </Link>

        {/* DESKTOP LINKS */}
        <nav className="navbar-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP SENIOR PORTAL */}
        <Link href="/login" className="senior-button">
          Senior Portal
          <ArrowUpRight size={16} />
        </Link>

        {/* MOBILE SENIOR PORTAL — LEFT FROM EDGE */}
        <Link href="/login" className="mobile-senior-button">
          Senior Portal
          <ArrowUpRight size={15} />
        </Link>
      </div>

      {/* MOBILE DROPDOWN */}
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

        .navbar-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
          color: #080a0d;
          text-decoration: none;
          white-space: nowrap;
        }

        .navbar-brand span {
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.28em;
          color: rgba(8, 10, 13, 0.55);
        }

        .navbar-brand strong {
          font-size: 20px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

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
        }

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
          text-decoration: none;
          white-space: nowrap;
        }

        .mobile-menu-button,
        .mobile-senior-button,
        .mobile-menu {
          display: none;
        }

        @media (max-width: 1000px) {
          .navbar-links {
            gap: 18px;
            margin-right: 18px;
          }

          .navbar-links a {
            font-size: 12px;
          }
        }

        @media (max-width: 800px) {
          .navbar-inner {
            height: 132px;
            padding: 0;
            display: block;
          }

          /* MENU FIXED LEFT */
          .mobile-menu-button {
            display: flex;
            position: absolute;
            left: 24px;
            top: 50%;
            transform: translateY(-50%);
            align-items: center;
            justify-content: center;
            border: 0;
            padding: 0;
            background: transparent;
            color: #080a0d;
            z-index: 10;
          }

          /* LOGO */
          .navbar-brand {
            position: absolute;
            left: 105px;
            top: 50%;
            transform: translateY(-50%);
            gap: 12px;
          }

          .navbar-brand span {
            font-size: 8px;
            letter-spacing: 0.15em;
          }

          .navbar-brand strong {
            font-size: 20px;
          }

          /* HIDE DESKTOP ITEMS */
          .navbar-links,
          .senior-button {
            display: none;
          }

          /* SENIOR PORTAL — FULLY VISIBLE */
          .mobile-senior-button {
            display: inline-flex;
            position: absolute;
            right: 58px;
            top: 50%;
            transform: translateY(-50%);
            align-items: center;
            gap: 4px;
            padding: 0;
            color: #080a0d;
            font-size: 11px;
            font-weight: 400;
            white-space: nowrap;
            text-decoration: none;
            z-index: 10;
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
        }

        @media (max-width: 450px) {
          .mobile-menu-button {
            left: 18px;
          }

          .navbar-brand {
            left: 88px;
          }

          .navbar-brand span {
            font-size: 7px;
            letter-spacing: 0.1em;
          }

          .navbar-brand strong {
            font-size: 17px;
          }

          .mobile-senior-button {
            right: 48px;
            font-size: 10px;
          }
        }
      `}</style>
    </header>
  );
}
