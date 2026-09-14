"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Search } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Resource = {
  id: number;
  title: string;
  description: string | null;
  category: string;
  semester: number | null;
  course: string | null;
  file_path: string;
  uploaded_by: string | null;
  created_at: string;
};

const categories = [
  "All",
  "Academics",
  "Previous Papers",
  "Student Life",
  "Zanzibar Guide",
  "Internships",
  "Other",
];

export default function ResourcesPage() {
  const supabase = createClient();

  const [resources, setResources] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadResources();
  }, []);

  async function loadResources() {
    const { data, error } = await supabase
      .from("resources")
      .select(
        "id, title, description, category, semester, course, file_path, uploaded_by, created_at"
      )
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setResources(data ?? []);
    }

    setLoading(false);
  }

  async function downloadResource(filePath: string) {
    const { data, error } = await supabase.storage
      .from("resources")
      .createSignedUrl(filePath, 300);

    if (error) {
      alert(error.message);
      return;
    }

    window.open(data.signedUrl, "_blank");
  }

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      category === "All" || resource.category === category;

    const text = [
      resource.title,
      resource.description,
      resource.category,
      resource.course,
      resource.semester?.toString(),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesCategory && text.includes(search.toLowerCase());
  });

  return (
    <main className="bg-[#f5f3ee] text-[#0b1220]">

      {/* INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
              <span>Student Archive</span>
              <span className="h-px w-8 bg-black/20" />
              <span>Resources</span>
            </div>

            <h1 className="mt-10 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
              The shared
              <br />
              knowledge base.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
              Notes, papers, guides and practical knowledge,
              collected by students and passed forward.
            </p>

          </div>

        </div>
      </section>


      {/* SEARCH */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="relative max-w-xl flex-1">

            <Search
              size={17}
              strokeWidth={1.6}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search the archive"
              className="w-full border-b border-black/20 bg-transparent py-3 pl-10 pr-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black/50"
            />

          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs transition ${
                  category === item
                    ? "border-[#0b1220] bg-[#0b1220] text-white"
                    : "border-black/10 bg-white/40 text-black/50 hover:bg-white"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        {loading && (
          <div className="border-y border-black/10 py-12 text-sm text-black/40">
            Loading archive...
          </div>
        )}

        {error && (
          <div className="border-y border-red-200 py-12 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && filteredResources.length === 0 && (
          <div className="border-y border-black/10 py-20">
            <FileText
              size={22}
              strokeWidth={1.5}
              className="text-black/30"
            />

            <h2 className="mt-5 text-2xl font-medium tracking-tight">
              Nothing here yet.
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-black/45">
              Try another search or category. New contributions will appear
              here as the archive grows.
            </p>
          </div>
        )}

        {!loading && !error && filteredResources.length > 0 && (
          <div className="border-t border-black/10">

            {filteredResources.map((resource) => (
              <article
                key={resource.id}
                className="group grid gap-5 border-b border-black/10 py-8 md:grid-cols-[80px_1fr_auto] md:items-center"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <FileText
                    size={19}
                    strokeWidth={1.5}
                    className="text-black/45"
                  />
                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h2 className="text-xl font-medium tracking-tight">
                      {resource.title}
                    </h2>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
                      {resource.category}
                    </span>

                  </div>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-black/45">
                    {resource.description || "No description provided."}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-black/35">

                    {resource.semester && (
                      <span>
                        Semester {resource.semester}
                      </span>
                    )}

                    {resource.course && (
                      <span>
                        {resource.course}
                      </span>
                    )}

                  </div>

                </div>

                <button
                  onClick={() => downloadResource(resource.file_path)}
                  className="group/button inline-flex items-center gap-2 text-sm font-medium md:justify-self-end"
                >
                  Download

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </button>

              </article>
            ))}

          </div>
        )}

      </section>


      {/* CONTRIBUTION */}
      <section className="border-y border-black/10 bg-[#0b1220] text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">

          <div className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-end">

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Contribute
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
                Leave the next
                <br />
                batch something useful.
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              Notes, papers, guides and practical knowledge become more
              valuable when they are easy to find.
            </p>

          </div>

        </div>

      </section>


      {/* NOTE */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <p className="text-xs text-black/35">
          Student-contributed archive · Unofficial
        </p>

      </section>

    </main>
  );
}