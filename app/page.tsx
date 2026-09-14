import Link from "next/link";
import {
  ArrowUpRight,
  Backpack,
  BookOpen,
  FileText,
  Map,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Academics",
    description: "Courses, notes, papers.",
    href: "/academics",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Resources",
    description: "Shared knowledge.",
    href: "/resources",
    icon: FileText,
  },
  {
    number: "03",
    title: "Zanzibar",
    description: "Life beyond campus.",
    href: "/zanzibar-guide",
    icon: Map,
  },
  {
    number: "04",
    title: "Preparation",
    description: "What to bring. What to know.",
    href: "/things-to-carry",
    icon: Backpack,
  },
];

export default function Home() {
  return (
    <main className="bg-[#f5f3ee] text-[#0b1220]">

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              <span>IIT Madras Zanzibar</span>
              <span className="h-px w-8 bg-black/20" />
              <span>Student Archive</span>
            </div>

            <h1 className="mt-10 max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-[96px]">
              The student archive
              <br />
              for Zanzibar.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
              Courses. Resources. Student life.
              <br />
              Practical knowledge, shared forward.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">

              <Link
                href="/resources"
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                Enter the archive
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <span className="h-5 w-px bg-black/15" />

              <span className="text-sm text-black/40">
                Unofficial · Student maintained
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* MAIN INDEX */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            Explore
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            The archive.
          </h2>
        </div>

        <div className="grid border-y border-black/10 md:grid-cols-2">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.number}
                href={section.href}
                className={`group flex min-h-[250px] flex-col justify-between p-7 transition-colors hover:bg-white md:p-9 ${
                  index % 2 === 0
                    ? "md:border-r md:border-black/10"
                    : ""
                } ${
                  index < 2
                    ? "border-b border-black/10"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <span className="text-[11px] font-semibold tracking-[0.24em] text-black/30">
                    {section.number}
                  </span>

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-3 flex items-center justify-between gap-6">

                    <p className="text-sm text-black/45">
                      {section.description}
                    </p>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="shrink-0 text-black/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

    </main>
  );
}