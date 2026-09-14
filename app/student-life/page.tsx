import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Home,
  MessageCircle,
  Trophy,
  Users,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Clubs",
    description: "Communities, interests and student-led activity.",
    icon: Users,
  },
  {
    number: "02",
    title: "Events",
    description: "What is happening around campus.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Hostel",
    description: "The practical side of living together.",
    icon: Home,
  },
  {
    number: "04",
    title: "Sports",
    description: "Fitness, recreation and competition.",
    icon: Trophy,
  },
  {
    number: "05",
    title: "Experiences",
    description: "The things seniors wish they knew earlier.",
    icon: MessageCircle,
  },
];

export default function StudentLifePage() {
  return (
    <main className="bg-[#f5f3ee] text-[#0b1220]">

      {/* INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            <span>Student Archive</span>
            <span className="h-px w-8 bg-black/20" />
            <span>Student Life</span>
          </div>

          <h1 className="mt-10 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
            Life beyond
            <br />
            the timetable.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
            Clubs, events, hostel life, sport and the experiences
            that shape student life.
          </p>

        </div>
      </section>


      {/* INDEX */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="mb-10">

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            Browse
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Outside the classroom.
          </h2>

        </div>

        <div className="grid border-y border-black/10 md:grid-cols-2">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.number}
                href="/resources"
                className={`group flex min-h-[260px] flex-col justify-between p-7 transition-colors hover:bg-white md:p-9 ${
                  index < sections.length - 1
                    ? "border-b border-black/10"
                    : ""
                } ${
                  index % 2 === 0
                    ? "md:border-r md:border-black/10"
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

                  <div className="mt-3 flex items-end justify-between gap-6">

                    <p className="max-w-sm text-sm leading-6 text-black/45">
                      {section.description}
                    </p>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="shrink-0 text-black/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </section>


      {/* COMMUNITY STATEMENT */}
      <section className="border-y border-black/10 bg-[#0b1220] text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">

          <div className="grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end">

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Student memory
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
                The part of university
                <br />
                you do not put on a CV.
              </h2>

            </div>

            <div>

              <p className="max-w-sm text-sm leading-7 text-white/45">
                Experiences, recommendations and small pieces of advice
                can be just as useful as formal documentation.
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

        <div className="flex flex-col gap-3 text-xs text-black/35 md:flex-row md:items-center md:justify-between">

          <p>
            Student life archive
          </p>

          <Link
            href="/zanzibar-guide"
            className="inline-flex items-center gap-2"
          >
            Zanzibar field guide
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </section>

    </main>
  );
}