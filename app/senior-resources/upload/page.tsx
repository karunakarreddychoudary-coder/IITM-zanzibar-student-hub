import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Upload,
  Users,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Contribute",
    description: "Upload notes, papers and guides.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Organise",
    description: "Add the context that makes resources useful.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Pass it on",
    description: "Leave something useful for the next batch.",
    icon: Users,
  },
];

export default function SeniorResourcesPage() {
  return (
    <main className="bg-[#f5f3ee] text-[#0b1220]">

      {/* INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            <span>Student Archive</span>
            <span className="h-px w-8 bg-black/20" />
            <span>Senior Portal</span>
          </div>

          <h1 className="mt-10 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
            Leave the next
            <br />
            batch something useful.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
            A place for notes, papers, guides and practical knowledge.
          </p>

          <Link
            href="/senior-resources/upload"
            className="mt-9 inline-flex items-center gap-2 text-sm font-medium"
          >
            Upload a resource
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </section>

      {/* OPTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="grid border-y border-black/10 md:grid-cols-3">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={section.number}
                className={`min-h-[260px] p-7 md:p-9 ${
                  index < 2
                    ? "border-b border-black/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <span className="text-[11px] font-semibold tracking-[0.24em] text-black/25">
                    {section.number}
                  </span>

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-black/30"
                  />

                </div>

                <div className="mt-20">

                  <h2 className="text-2xl font-medium tracking-[-0.03em]">
                    {section.title}
                  </h2>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-black/45">
                    {section.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* SIMPLE LINK */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="border-t border-black/10 pt-8">

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium"
          >
            Browse the resource archive
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}