"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Backpack,
  Check,
  FileText,
  Laptop,
  Shirt,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

type Item = {
  id: string;
  name: string;
};

type Category = {
  number: string;
  title: string;
  description: string;
  icon: typeof FileText;
  items: Item[];
};

const categories: Category[] = [
  {
    number: "01",
    title: "Documents",
    description: "Keep originals. Keep digital copies.",
    icon: FileText,
    items: [
      { id: "passport", name: "Passport" },
      { id: "visa", name: "Visa / immigration documents" },
      { id: "admission", name: "Admission documents" },
      { id: "certificates", name: "Academic certificates" },
      { id: "photos", name: "Passport-size photographs" },
    ],
  },
  {
    number: "02",
    title: "Electronics",
    description: "Study, communication and daily essentials.",
    icon: Laptop,
    items: [
      { id: "laptop", name: "Laptop" },
      { id: "phone", name: "Phone" },
      { id: "chargers", name: "Chargers and cables" },
      { id: "powerbank", name: "Power bank" },
      { id: "adapter", name: "Universal travel adapter" },
    ],
  },
  {
    number: "03",
    title: "Clothing",
    description: "Keep it practical.",
    icon: Shirt,
    items: [
      { id: "daily", name: "Everyday clothes" },
      { id: "formal", name: "Formal clothes" },
      { id: "footwear", name: "Comfortable footwear" },
      { id: "rainwear", name: "Rainwear" },
      { id: "sleepwear", name: "Sleepwear" },
    ],
  },
  {
    number: "04",
    title: "Essentials",
    description: "The small things worth remembering.",
    icon: ShoppingBag,
    items: [
      { id: "toiletries", name: "Toiletries" },
      { id: "medicines", name: "Personal medicines" },
      { id: "bottle", name: "Reusable water bottle" },
      { id: "bag", name: "Day bag / backpack" },
      { id: "locks", name: "Small locks" },
    ],
  },
];

export default function ThingsToCarryPage() {
  const allItems = useMemo(
    () => categories.flatMap((category) => category.items),
    []
  );

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const completed = allItems.filter((item) => checked[item.id]).length;
  const progress = Math.round((completed / allItems.length) * 100);

  function toggleItem(id: string) {
    setChecked((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  function resetChecklist() {
    setChecked({});
  }

  return (
    <main className="bg-[#f5f3ee] text-[#0b1220]">

      {/* INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
              <span>Student Archive</span>
              <span className="h-px w-8 bg-black/20" />
              <span>Preparation</span>
            </div>

            <h1 className="mt-10 max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
              What to
              <br />
              bring.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
              A practical packing list for the move to Zanzibar.
            </p>

          </div>

        </div>
      </section>


      {/* PROGRESS */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">

        <div className="flex flex-col gap-4 border-y border-black/10 py-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-black/35">
              Progress
            </p>

            <p className="mt-2 text-2xl font-medium tracking-tight">
              {completed}
              <span className="text-black/25">
                {" "}
                / {allItems.length}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-5">

            <div className="w-32">
              <div className="h-px bg-black/10">
                <div
                  className="h-px bg-[#0b1220] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <span className="text-xs text-black/40">
              {progress}%
            </span>

            <button
              onClick={resetChecklist}
              className="text-xs font-medium text-black/45 underline underline-offset-4"
            >
              Reset
            </button>

          </div>

        </div>

      </section>


      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid border-y border-black/10 md:grid-cols-2">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <section
                key={category.number}
                className={`p-7 md:p-9 ${
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

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  <span className="text-[11px] font-semibold tracking-[0.24em] text-black/25">
                    {category.number}
                  </span>

                </div>

                <h2 className="mt-10 text-2xl font-medium tracking-[-0.03em]">
                  {category.title}
                </h2>

                <p className="mt-2 text-sm text-black/40">
                  {category.description}
                </p>

                <div className="mt-7 space-y-1">

                  {category.items.map((item) => {
                    const isChecked = Boolean(checked[item.id]);

                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className="group flex w-full items-center gap-4 border-b border-black/5 py-4 text-left"
                      >

                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                            isChecked
                              ? "border-[#0b1220] bg-[#0b1220] text-white"
                              : "border-black/20 bg-transparent"
                          }`}
                        >
                          {isChecked && <Check size={12} />}
                        </span>

                        <span
                          className={`text-sm transition ${
                            isChecked
                              ? "text-black/30 line-through"
                              : "text-black/70"
                          }`}
                        >
                          {item.name}
                        </span>

                      </button>
                    );
                  })}

                </div>

              </section>
            );
          })}

        </div>

      </section>


      {/* NOTE */}
      <section className="border-y border-black/10 bg-[#dce8e4]">

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/60">
              <Smartphone size={19} strokeWidth={1.5} />
            </div>

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-black/35">
                Good practice
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Keep important documents backed up.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/50">
                Carry what you need physically. Keep secure digital copies
                of the documents you cannot afford to lose.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER LINK */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <Link
          href="/zanzibar-guide"
          className="inline-flex items-center gap-2 text-sm font-medium"
        >
          Continue to Zanzibar Guide
          <ArrowUpRight size={16} />
        </Link>

      </section>

    </main>
  );
}