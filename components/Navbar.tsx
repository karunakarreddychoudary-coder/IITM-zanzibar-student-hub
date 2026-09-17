
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

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        <Link href="/" className="navbar-brand">
          <span className="brand-top">IIT MADRAS</span>
          <strong className="brand-bottom">ZANZIBAR</strong>
        </Link>

        <nav className="navbar-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/login" className="senior-button">
          <span>Senior Portal</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>

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
          height: 104px;
          padding: 0 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .navbar-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
          color: #080a0d;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
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

        .mobile-menu-button {
          display: none;
        }

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
            height: 132px !important;
            padding: 0 !important;
            display: grid !important;
            grid-template-columns: 76px 1fr auto !important;
            align-items: center !important;
            column-gap: 10px !important;
          }

          .mobile-menu-button {
            display: flex !important;
            position: static !important;
            grid-column: 1 !important;
            grid-row: 1 !important;
            justify-self: center !important;
            align-items: center !important;
            justify-content: center !important;
            border: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            color: #080a0d !important;
            transform: none !important;
          }

          .navbar-brand {
            position: static !important;
            grid-column: 2 !important;
            grid-row: 1 !important;
            justify-self: start !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            margin: 0 !important;
            transform: none !important;
          }

          .brand-top {
            font-size: 8px !important;
            letter-spacing: 0.15em !important;
          }

          .brand-bottom {
            font-size: 20px !important;
          }

          .senior-button {
  display: inline-flex !important;
  position: absolute !important;

  left: 62% !important;
  right: auto !important;
  top: 50% !important;

  transform: translate(-50%, -50%) !important;

  align-items: center !important;
  gap: 4px !important;
  padding: 0 !important;
  margin: 0 !important;

  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: #080a0d !important;

  font-size: 11px !important;
  font-weight: 400 !important;
  white-space: nowrap !important;
  z-index: 20 !important;
}
          .navbar-links {
            display: none !important;
          }

          .mobile-menu {
            display: flex !important;
            flex-direction: column !important;
            padding: 12px 24px 24px !important;
            background: #f7f5ef !important;
            border-top: 1px solid rgba(8, 10, 13, 0.08) !important;
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
          .navbar-inner {
            grid-template-columns: 65px 1fr auto !important;
            column-gap: 6px !important;
          }

          .brand-top {
            font-size: 7px !important;
          }

          .brand-bottom {
            font-size: 17px !important;
          }

          .senior-button {
            padding-right: 12px !important;
            font-size: 10px !important;
          }
        }
      `}</style>
    </header>
  );
}
