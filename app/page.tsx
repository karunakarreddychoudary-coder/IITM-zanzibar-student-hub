"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Backpack,
  BookOpen,
  FileText,
  Map,
  Users,
} from "lucide-react";

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
  const [introDone, setIntroDone] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const skipTimer = window.setTimeout(() => {
      setShowSkip(true);
    }, 900);

    const introTimer = window.setTimeout(() => {
      setIntroDone(true);
    }, 6800);

    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(introTimer);
    };
  }, []);

  function skipIntro() {
    setIntroDone(true);
  }

  return (
    <main className="relative overflow-hidden bg-[#f3f0e9] text-[#090c12]">

      {/* =========================================================
          CINEMATIC INTRO
      ========================================================= */}

      {!introDone && (
        <div className="fixed inset-0 z-[999] overflow-hidden bg-[#05070b] text-white">

          {/* GRID */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-[12%] top-0 h-full w-px bg-white/10" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
            <div className="absolute right-[12%] top-0 h-full w-px bg-white/10" />

            <div className="absolute left-0 top-[28%] h-px w-full bg-white/10" />
            <div className="absolute left-0 top-[72%] h-px w-full bg-white/10" />
          </div>

          {/* TOP LINE */}
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30 md:px-10">
            <span className="anim-fade-up">IIT MADRAS</span>
            <span className="anim-fade-up anim-delay-1">
              ZANZIBAR · 2026
            </span>
          </div>

          {/* CENTER CONTENT */}
          <div className="relative flex h-full items-center justify-center px-6">

            <div className="w-full max-w-[1500px]">

              {/* small heading */}
              <div className="overflow-hidden">
                <p className="anim-fade-up text-center text-[10px] font-semibold uppercase tracking-[0.42em] text-white/40 md:text-xs">
                  A new chapter begins
                </p>
              </div>

              {/* WELCOME */}
              <div className="mt-8 overflow-hidden">
                <h1 className="anim-title text-center text-[17vw] font-light leading-[0.82] tracking-[-0.07em] text-white md:text-[14vw] lg:text-[12vw]">
                  WELCOME
                </h1>
              </div>

              {/* 2026 */}
              <div className="overflow-hidden">
                <div className="anim-year text-center text-[22vw] font-semibold leading-[0.72] tracking-[-0.09em] text-white md:text-[19vw] lg:text-[16vw]">
                  2026
                </div>
              </div>

              {/* FRESHERS */}
              <div className="overflow-hidden">
                <div className="anim-freshers text-center text-[14vw] font-light uppercase leading-[0.8] tracking-[-0.065em] text-white/90 md:text-[12vw] lg:text-[10vw]">
                  FRESHERS
                </div>
              </div>

              {/* UNDERLINE */}
              <div className="mx-auto mt-10 h-px w-0 bg-white/70 anim-line-grow" />

              {/* SMALL STATEMENT */}
              <div className="mt-7 overflow-hidden">
                <p className="anim-fade-late text-center text-xs uppercase tracking-[0.32em] text-white/35 md:text-sm">
                  IIT Madras Zanzibar · Student Archive
                </p>
              </div>

            </div>

          </div>

          {/* BOTTOM PROGRESS */}
          <div className="absolute bottom-0 left-0 right-0">

            <div className="h-px bg-white/10">
              <div className="anim-progress h-px bg-white/80" />
            </div>

            <div className="flex items-center justify-between px-6 py-5 text-[10px] uppercase tracking-[0.25em] text-white/25 md:px-10">
              <span>Batch 2026</span>
              <span>Begin</span>
            </div>

          </div>

          {/* LIGHT SWEEP */}
          <div className="anim-sweep pointer-events-none absolute inset-y-0 left-0 w-[18vw] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />

          {/* EXIT CURTAIN */}
          <div className="anim-curtain pointer-events-none absolute inset-0 bg-[#f3f0e9]" />

          {/* SKIP */}
          {showSkip && (
            <button
              onClick={skipIntro}
              className="absolute bottom-16 right-6 z-20 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 transition hover:text-white md:right-10"
            >
              Skip intro
            </button>
          )}

        </div>
      )}

      {/* =========================================================
          MAIN SITE
      ========================================================= */}

      <div
        className={
          introDone
            ? "opacity-100 transition-opacity duration-1000"
            : "h-screen overflow-hidden opacity-0"
        }
      >

        {/* HERO */}
        <section className="min-h-[calc(100vh-5rem)] border-b border-black/10">

          <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16 lg:px-14">

            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.28em] text-black/35 md:text-[11px]">
              <span>Unofficial Student Archive</span>
              <span>2026</span>
            </div>

            <div className="py-20 md:py-24">

              <p className="mb-6 font-serif text-2xl italic text-black/45 md:text-3xl">
                Welcome, freshers.
              </p>

              <h1 className="text-[18vw] font-medium leading-[0.72] tracking-[-0.075em] md:text-[14vw] lg:text-[12vw]">

                <span className="block">
                  IIT MADRAS
                </span>

                <span className="block pl-[7vw] md:pl-[5vw] lg:pl-[4vw]">
                  ZANZIBAR
                </span>

              </h1>

              <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                <p className="max-w-md text-sm leading-7 text-black/45 md:text-base">
                  Courses, resources, student life and the
                  practical knowledge that makes a new place familiar.
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

              <h2 className="mt-3 font-serif text-5xl font-medium tracking-[-0.04em] md:text-6xl">
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

                  <h3 className="mt-4 font-serif text-4xl font-medium tracking-[-0.04em] md:mt-0 md:text-6xl">
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

            <h2 className="mt-7 max-w-6xl font-serif text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
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

        /* Main reveal */

        @keyframes introFadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-fade-up {
          animation: introFadeUp 900ms
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }

        .anim-delay-1 {
          animation-delay: 180ms;
        }


        /* WELCOME */

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(110%);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-title {
          animation:
            titleReveal 1200ms
            cubic-bezier(0.16, 1, 0.3, 1)
            500ms both;
        }


        /* YEAR */

        @keyframes yearReveal {
          0% {
            opacity: 0;
            transform: translateY(120%) scale(1.12);
            filter: blur(12px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .anim-year {
          animation:
            yearReveal 1300ms
            cubic-bezier(0.16, 1, 0.3, 1)
            1050ms both;
        }


        /* FRESHERS */

        @keyframes freshersReveal {
          0% {
            opacity: 0;
            letter-spacing: 0.18em;
            transform: translateY(80px);
          }

          100% {
            opacity: 1;
            letter-spacing: -0.065em;
            transform: translateY(0);
          }
        }

        .anim-freshers {
          animation:
            freshersReveal 1300ms
            cubic-bezier(0.16, 1, 0.3, 1)
            1700ms both;
        }


        /* LINE */

        @keyframes lineGrow {
          0% {
            width: 0;
            opacity: 0;
          }

          100% {
            width: 120px;
            opacity: 1;
          }
        }

        .anim-line-grow {
          animation:
            lineGrow 900ms
            cubic-bezier(0.16, 1, 0.3, 1)
            2850ms both;
        }


        /* LATE TEXT */

        .anim-fade-late {
          animation:
            introFadeUp 900ms
            cubic-bezier(0.16, 1, 0.3, 1)
            3100ms both;
        }


        /* PROGRESS */

        @keyframes progress {
          0% {
            width: 0;
          }

          100% {
            width: 100%;
          }
        }

        .anim-progress {
          animation:
            progress 6.6s
            linear
            forwards;
        }


        /* LIGHT SWEEP */

        @keyframes sweep {
          0% {
            left: -25%;
          }

          55% {
            left: 45%;
          }

          100% {
            left: 125%;
          }
        }

        .anim-sweep {
          animation:
            sweep 5.6s
            cubic-bezier(0.4, 0, 0.2, 1)
            900ms forwards;
        }


        /* EXIT CURTAIN */

        @keyframes curtain {
          0% {
            transform: translateY(100%);
          }

          100% {
            transform: translateY(0);
          }
        }

        .anim-curtain {
          animation:
            curtain 850ms
            cubic-bezier(0.77, 0, 0.175, 1)
            5.95s forwards;
        }


        /* Reduced motion */

        @media (prefers-reduced-motion: reduce) {

          .anim-fade-up,
          .anim-title,
          .anim-year,
          .anim-freshers,
          .anim-line-grow,
          .anim-fade-late,
          .anim-progress,
          .anim-sweep,
          .anim-curtain {
            animation: none !important;
          }

        }

      `}</style>

    </main>
  );
}
