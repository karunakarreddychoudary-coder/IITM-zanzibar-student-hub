"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, FileText, Map, Users, Backpack } from "lucide-react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Manrope({
  variable: "--font-sans-premium",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sections = [
  {
    number: "01",
    title: "Academics",
    description: "Courses, notes and papers.",
    href: "/academics",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Resources",
    description: "The shared student archive.",
    href: "/resources",
    icon: FileText,
  },
  {
    number: "03",
    title: "Zanzibar",
    description: "The things worth knowing.",
    href: "/zanzibar-guide",
    icon: Map,
  },
  {
    number: "04",
    title: "Student Life",
    description: "Everything beyond class.",
    href: "/student-life",
    icon: Users,
  },
  {
    number: "05",
    title: "Preparation",
    description: "What to bring. What to know.",
    href: "/things-to-carry",
    icon: Backpack,
  },
];

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setIntroLeaving(true);
    }, 2600);

    const hideTimer = window.setTimeout(() => {
      setIntroVisible(false);
    }, 3500);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <main
      className={`${display.variable} ${sans.variable} relative overflow-x-hidden bg-[#f3f0e9] text-[#090c12]`}
    >
      {/* CINEMATIC INTRO */}
      {introVisible && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#080a0f] text-[#f4f1e9] ${
            introLeaving ? "intro-exit" : ""
          }`}
        >
          <div className="absolute inset-0">
            <div className="intro-line intro-line-one" />
            <div className="intro-line intro-line-two" />
          </div>

          <div className="relative z-10 w-full px-6">
            <div className="mx-auto max-w-[1500px]">

              <div className="mb-10 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.34em] text-white/35 md:text-[11px]">
                <span className="intro-fade">IIT MADRAS</span>
                <span className="intro-fade delay-one">ZANZIBAR · 2026</span>
              </div>

              <div className="overflow-hidden">
                <p className="intro-kicker text-xs font-medium uppercase tracking-[0.3em] text-white/45 md:text-sm">
                  A new chapter begins
                </p>
              </div>

              <div className="overflow-hidden">
                <h1 className="intro-title mt-5 font-[var(--font-display)] text-[18vw] font-medium leading-[0.76] tracking-[-0.065em] md:text-[15vw] lg:text-[12vw]">
                  Welcome,
                </h1>
              </div>

              <div className="overflow-hidden">
                <h2 className="intro-title intro-title-delay font-[var(--font-display)] text-[18vw] font-medium leading-[0.76] tracking-[-0.065em] md:text-[15vw] lg:text-[12vw]">
                  2026 Freshers.
                </h2>
              </div>

              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/35">
                <span className="intro-fade delay-two">IIT Madras Zanzibar</span>
                <span className="h-px w-12 bg-white/20 intro-fade delay-two" />
                <span className="intro-fade delay-three">Student Archive</span>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MAIN PAGE */}
      <div
        className={`${
          introVisible ? "site-hidden" : "site-visible"
        }`}
      >
        {/* HERO */}
        <section className="min-h-[calc(100vh-5rem)] border-b border-black/10">

          <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16 lg:px-14">

            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.28em] text-black/35 md:text-[11px]">
              <span>Unofficial Student Archive</span>
              <span>Est. 2026</span>
            </div>

            <div className="py-20 md:py-24">

              <p className="mb-6 font-[var(--font-display)] text-2xl italic text-black/45 md:text-3xl">
                Welcome, freshers.
              </p>

              <h1 className="font-[var(--font-display)] text-[18vw] font-medium leading-[0.72] tracking-[-0.07em] md:text-[14vw] lg:text-[12vw]">

                <span className="block">
                  IIT MADRAS
                </span>

                <span className="block pl-[7vw] md:pl-[5vw] lg:pl-[4vw]">
                  ZANZIBAR
                </span>

              </h1>

              <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                <p className="max-w-md text-sm leading-7 text-black/45 md:text-base">
                  Courses, resources, student life and the practical
                  knowledge that makes a new place feel familiar.
                </p>

                <Link
                  href="/resources"
                  className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  Enter the archive

                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight size={18} strokeWidth={1.4} />
                  </span>
                </Link>

              </div>

            </div>

            <div className="grid border-t border-black/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-black/30 md:grid-cols-3 md:text-[11px]">

              <div>IIT Madras Zanzibar</div>

              <div className="mt-2 md:mt-0 md:text-center">
                Student maintained
              </div>

              <div className="mt-2 md:mt-0 md:text-right">
                Batch 2026
              </div>

            </div>

          </div>
        </section>

        {/* INDEX */}
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

          <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-5">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/35">
                Navigate
              </p>

              <h2 className="mt-3 font-[var(--font-display)] text-5xl font-medium tracking-[-0.04em] md:text-6xl">
                The archive.
              </h2>
            </div>

            <div className="hidden text-xs text-black/30 md:block">
              05 sections
            </div>

          </div>

          <div className="border-t border-black/10">

            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <Link
                  key={section.number}
                  href={section.href}
                  className="group grid items-center border-b border-black/10 py-8 transition-colors hover:bg-white md:grid-cols-[90px_1fr_1fr_auto] md:gap-8 md:py-10"
                >
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-black/25">
                    {section.number}
                  </span>

                  <h3 className="mt-4 font-[var(--font-display)] text-4xl font-medium tracking-[-0.04em] md:mt-0 md:text-6xl">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm text-black/40 md:mt-0 md:text-base">
                    {section.description}
                  </p>

                  <Icon
                    size={20}
                    strokeWidth={1.4}
                    className="mt-5 text-black/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:mt-0"
                  />
                </Link>
              );
            })}

          </div>

        </section>

        {/* END */}
        <section className="border-y border-black/10 bg-[#080a0f] text-white">

          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              For the next batch
            </p>

            <h2 className="mt-7 max-w-6xl font-[var(--font-display)] text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Start curious.
              <br />
              Leave something
              <br />
              useful behind.
            </h2>

            <Link
              href="/resources"
              className="mt-10 inline-flex items-center gap-3 text-sm font-medium"
            >
              Explore the archive
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-8 md:px-10 lg:px-14">

          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.18em] text-black/30 md:flex-row md:items-center md:justify-between md:text-[11px]">

            <span>IIT Madras Zanzibar Student Hub</span>

            <span>Unofficial · Student maintained</span>

          </div>

        </section>
      </div>

      <style jsx global>{`
        .site-hidden {
          opacity: 0;
          transform: translateY(20px);
        }

        .site-visible {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 1100ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .intro-title {
          animation: titleIn 1200ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .intro-title-delay {
          animation-delay: 220ms;
        }

        .intro-kicker {
          animation: fadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .intro-fade {
          animation: fadeUp 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .delay-one {
          animation-delay: 180ms;
        }

        .delay-two {
          animation-delay: 420ms;
        }

        .delay-three {
          animation-delay: 560ms;
        }

        .intro-line {
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          background: rgba(255, 255, 255, 0.08);
          animation: lineIn 1500ms ease both;
        }

        .intro-line-one {
          left: 16%;
        }

        .intro-line-two {
          right: 16%;
          animation-delay: 120ms;
        }

        .intro-exit {
          animation: introExit 900ms cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        @keyframes titleIn {
          from {
            opacity: 0;
            transform: translateY(115%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineIn {
          from {
            transform: scaleY(0);
            transform-origin: top;
          }
          to {
            transform: scaleY(1);
            transform-origin: top;
          }
        }

        @keyframes introExit {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
            pointer-events: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-title,
          .intro-kicker,
          .intro-fade,
          .intro-line {
            animation: none !important;
          }

          .intro-exit {
            animation: none !important;
          }

          .site-visible,
          .site-hidden {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
