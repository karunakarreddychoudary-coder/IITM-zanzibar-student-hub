import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  GraduationCap,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Courses",
    description: "Curriculum, semesters and course information.",
    href: "/resources",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Notes",
    description: "Lecture notes, revision material and study guides.",
    href: "/resources",
    icon: FileText,
  },
  {
    number: "03",
    title: "Previous Papers",
    description: "Past papers and preparation material.",
    href: "/resources",
    icon: GraduationCap,
  },
];

export default function AcademicsPage() {
  return (
    <main className="bg-[#f5f3ee] text-[#0b1220]">

      {/* INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
              <span>Student Archive</span>
              <span className="h-px w-8 bg-black/20" />
              <span>Academics</span>
            </div>

            <h1 className="mt-10 max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.05em] md:text-7xl lg:text-[88px]">
              The academic
              <br />
              archive.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
              Courses, notes and papers collected by the student community.
            </p>

          </div>

        </div>
      </section>


      {/* INDEX */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="mb-10">

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            Browse
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Find what you need.
          </h2>

        </div>


        <div className="grid border-y border-black/10 md:grid-cols-3">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.number}
                href={section.href}
                className={`group flex min-h-[300px] flex-col justify-between p-7 transition-colors hover:bg-white md:p-9 ${
                  index < 2 ? "md:border-r md:border-black/10" : ""
                } ${
                  index < 2
                    ? "border-b border-black/10 md:border-b-0"
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
                    className="text-black/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>


                <div>

                  <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                    {section.title}
                  </h3>

                  <div className="mt-4 flex items-end justify-between gap-6">

                    <p className="max-w-xs text-sm leading-6 text-black/45">
                      {section.description}
                    </p>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-black/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </section>


      {/* PRINCIPLE */}
      <section className="border-y border-black/10 bg-[#dce8e4]">

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">

          <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
                Student principle
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
                Learn once.
                <br />
                Document it.
                <br />
                Pass it on.
              </h2>

            </div>

            <div>

              <p className="max-w-sm text-sm leading-7 text-black/50">
                Every useful note, paper and explanation makes the
                next semester a little easier.
              </p>

              <Link
                href="/senior-resources"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
              >
                Contribute
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER NOTE */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="text-xs text-black/35">
          Academic resources are student-contributed.
        </div>

      </section>

    </main>
  );
}