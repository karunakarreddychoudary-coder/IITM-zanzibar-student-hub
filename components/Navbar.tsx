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
    .brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  color: #080a0d;
  text-decoration: none;
  line-height: 1;
}

.brand-top {
  display: block;
  font-size: 10px;
  letter-spacing: 0.28em;
  white-space: nowrap;
}

.brand-bottom {
  display: block;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.04em;
  white-space: nowrap;
}

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

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
            onClick={() => setOpen(false)}
            className="mobile-senior"
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
        }

        .navbar-brand {
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: #080a0d;
        }

        .navbar-brand span {
          font-size: 10px;
          letter-spacing: 0.28em;
          color: rgba(8, 10, 13, 0.5);
        }

        .navbar-brand strong {
          font-size: 19px;
          font-weight: 500;
          letter-spacing: -0.03em;
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
          transition: opacity 0.2s ease;
        }

        .navbar-links a:hover {
          opacity: 0.55;
        }

        .senior-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 14px 20px;

          border: 1px solid #080a0d;

          background: #080a0d;
          color: #ffffff;

          border-radius: 999px;

          font-size: 13px;
          font-weight: 500;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .senior-button:hover {
          background: transparent;
          color: #080a0d;
          transform: translateY(-2px);
        }

        .mobile-menu-button {
          display: none;
          background: transparent;
          border: 0;
          color: #080a0d;
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
            height: 82px;
            padding: 0 22px;
          }

          .navbar-links,
          .senior-button {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 10px 22px 24px;
            background: #f7f5ef;
            border-top: 1px solid rgba(8, 10, 13, 0.08);
          }

          .mobile-menu a {
            padding: 15px 0;
            border-bottom: 1px solid rgba(8, 10, 13, 0.08);
            color: #080a0d;
            font-size: 14px;
          }

          .mobile-senior {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </header>
  );
}
