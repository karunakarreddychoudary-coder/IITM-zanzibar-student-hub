import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Map,
  Users,
  Backpack,
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
  return (
    <main className="bg-[#f4f2ed] text-[#080b12]">

      {/* HERO */}
      <section className="min-h-[calc(100vh-5rem)] border-b border-black/10">

        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16 lg:px-14">

          {/* Top label */}
          <div className="flex items-center justify-between">

            <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/40 md:text-[11px]">
              Unofficial Student Archive
            </div>

            <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30 md:text-[11px]">
              2026
            </div>

          </div>


          {/* Main title */}
          <div className="py-20 md:py-24">

            <p className="mb-6 text-sm font-medium text-black/45 md:text-base">
              Welcome, 2026 freshers.
            </p>

            <h1 className="max-w-[1400px] text-[18vw] font-medium leading-[0.78] tracking-[-0.075em] md:text-[15vw] lg:text-[12.5vw]">

              <span className="block">
                IIT MADRAS
              </span>

              <span className="block">
                ZANZIBAR
              </span>

            </h1>

            <div className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">

              <p className="max-w-md text-sm leading-6 text-black/50 md:text-base">
                The student-maintained archive for your time in Zanzibar.
              </p>

              <Link
                href="/resources"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em]"
              >
                Enter the hub

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </span>

              </Link>

            </div>

          </div>


          {/* Bottom line */}
          <div className="grid border-t border-black/10 pt-5 text-[11px] uppercase tracking-[0.18em] text-black/35 md:grid-cols-3">

            <div>
              IIT Madras Zanzibar
            </div>

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

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              The hub.
            </h2>
          </div>

          <div className="hidden text-xs text-black/35 md:block">
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
                className="group grid items-center border-b border-black/10 py-7 transition-colors hover:bg-white md:grid-cols-[90px_1fr_1fr_auto] md:gap-8 md:py-9"
              >

                <span className="text-[11px] font-semibold tracking-[0.22em] text-black/25">
                  {section.number}
                </span>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:mt-0 md:text-5xl">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm text-black/40 md:mt-0 md:text-base">
                  {section.description}
                </p>

                <Icon
                  size={21}
                  strokeWidth={1.4}
                  className="mt-5 text-black/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:mt-0"
                />

              </Link>
            );
          })}

        </div>

      </section>


      {/* CLOSING STATEMENT */}
      <section className="border-y border-black/10 bg-[#080b12] text-white">

        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
            A note to the new batch
          </p>

          <h2 className="mt-7 max-w-6xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-8xl">
            Start curious.
            <br />
            Leave something
            <br />
            useful behind.
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-6">

            <Link
              href="/resources"
              className="inline-flex items-center gap-3 text-sm font-medium"
            >
              Explore the archive
              <ArrowUpRight size={17} />
            </Link>

            <span className="h-px w-12 bg-white/20" />

            <span className="text-sm text-white/35">
              2026 → onwards
            </span>

          </div>

        </div>

      </section>


      {/* MINIMAL FOOT */}
      <section className="mx-auto max-w-[1600px] px-6 py-8 md:px-10 lg:px-14">

        <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-black/30 md:flex-row md:items-center md:justify-between">

          <span>
            IIT Madras Zanzibar Student Hub
          </span>

          <span>
            Unofficial · Student maintained
          </span>

        </div>

      </section>

    </main>
  );
}
