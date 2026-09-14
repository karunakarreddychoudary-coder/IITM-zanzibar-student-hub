import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  Bus,
  Home,
  MapPin,
  ShoppingBag,
  ShieldCheck,
  Utensils,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Getting Around",
    description: "Transport, routes and everyday movement.",
    icon: Bus,
  },
  {
    number: "02",
    title: "Accommodation",
    description: "Where to stay and what to consider.",
    icon: Home,
  },
  {
    number: "03",
    title: "Food",
    description: "Everyday options and student recommendations.",
    icon: Utensils,
  },
  {
    number: "04",
    title: "Shopping",
    description: "Essentials, groceries and everyday supplies.",
    icon: ShoppingBag,
  },
  {
    number: "05",
    title: "Money",
    description: "Payments, cash and everyday expenses.",
    icon: Banknote,
  },
  {
    number: "06",
    title: "Safety",
    description: "Useful habits and local awareness.",
    icon: ShieldCheck,
  },
];

export default function ZanzibarGuidePage() {
  return (
    <main className="bg-[#f5f3ee] text-[#0b1220]">

      {/* INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            <span>Student Archive</span>
            <span className="h-px w-8 bg-black/20" />
            <span>Zanzibar</span>
          </div>

          <div className="mt-10 grid gap-12 md:grid-cols-[1fr_0.45fr] md:items-end">

            <div>

              <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
                The Zanzibar
                <br />
                field guide.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
                The things worth knowing when Zanzibar becomes home.
              </p>

            </div>

            <div className="hidden border-l border-black/10 pl-8 md:block">

              <MapPin
                size={21}
                strokeWidth={1.5}
                className="text-black/45"
              />

              <p className="mt-5 text-sm leading-6 text-black/45">
                Built around student experience,
                practical knowledge and the details
                that make daily life easier.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* INTRO NOTE */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="grid gap-10 md:grid-cols-[0.7fr_1fr]">

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            Orientation
          </p>

          <div className="max-w-2xl">

            <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The useful things are
              <br />
              rarely in the handbook.
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/50 md:text-base">
              This guide is for the everyday questions: how you move,
              where you go, what you need and what other students
              learned along the way.
            </p>

          </div>

        </div>

      </section>


      {/* INDEX */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid border-y border-black/10 md:grid-cols-2">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={section.number}
                className={`group flex min-h-[250px] flex-col justify-between p-7 transition-colors hover:bg-white md:p-9 ${
                  index % 2 === 0
                    ? "md:border-r md:border-black/10"
                    : ""
                } ${
                  index < 4
                    ? "border-b border-black/10"
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

                    <p className="max-w-xs text-sm leading-6 text-black/45">
                      {section.description}
                    </p>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="shrink-0 text-black/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* COMMUNITY */}
      <section className="border-y border-black/10 bg-[#dce8e4]">

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">

          <div className="grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end">

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
                Living archive
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
                Every batch
                <br />
                adds something.
              </h2>

            </div>

            <div>

              <p className="max-w-sm text-sm leading-7 text-black/50">
                Local recommendations, lessons learned and practical
                details become part of the archive as students contribute.
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
            Zanzibar field guide
          </p>

          <Link
            href="/things-to-carry"
            className="inline-flex items-center gap-2"
          >
            Before you leave
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </section>

    </main>
  );
}