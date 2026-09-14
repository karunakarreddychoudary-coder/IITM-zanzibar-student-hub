"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  FileUp,
  Upload,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function UploadPage() {
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Academics");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    setMessage("");

    if (!title || !file) {
      setMessage("Please add a title and choose a file.");
      return;
    }

    setLoading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setMessage("You must be logged in to upload.");
        setLoading(false);
        return;
      }

      const filePath = `${user.id}/${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("resources")
        .upload(filePath, file);

      if (uploadError) {
        setMessage(uploadError.message);
        setLoading(false);
        return;
      }

      const { error: dbError } = await supabase
        .from("resources")
        .insert({
          title,
          description,
          category,
          semester: semester ? Number(semester) : null,
          course,
          file_path: filePath,
          uploaded_by: user.email,
          status: "pending",
        });

      if (dbError) {
        setMessage(dbError.message);
        setLoading(false);
        return;
      }

      setMessage(
        "Resource uploaded successfully and is waiting for approval."
      );

      setTitle("");
      setDescription("");
      setSemester("");
      setCourse("");
      setFile(null);
    } catch {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#f7f5f0] text-[#0b1220]">

      {/* Header */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <Link
            href="/senior-resources"
            className="inline-flex items-center gap-2 text-sm text-black/50 transition hover:text-black"
          >
            <ArrowLeft size={15} />
            Senior Portal
          </Link>

          <div className="mt-10 max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
              Contribution
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-6xl">
              Share something
              <br />
              useful.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
              Upload a note, previous paper, guide or practical resource
              for students who come after you.
            </p>

          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* Main form */}
          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-7 md:p-10">

            <div className="space-y-7">

              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Resource title
                </label>

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Example: DSA Semester 2 Notes"
                  className="w-full rounded-xl border border-black/10 bg-[#f7f5f0] px-4 py-3.5 text-sm outline-none transition focus:border-black/30 focus:bg-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What is included in this resource?"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f5f0] px-4 py-3.5 text-sm outline-none transition focus:border-black/30 focus:bg-white"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-[#f7f5f0] px-4 py-3.5 text-sm outline-none"
                >
                  <option>Academics</option>
                  <option>Previous Papers</option>
                  <option>Student Life</option>
                  <option>Zanzibar Guide</option>
                  <option>Internships</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Semester + course */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Semester
                  </label>

                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    placeholder="2"
                    className="w-full rounded-xl border border-black/10 bg-[#f7f5f0] px-4 py-3.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Course
                  </label>

                  <input
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder="Data Structures"
                    className="w-full rounded-xl border border-black/10 bg-[#f7f5f0] px-4 py-3.5 text-sm outline-none"
                  />
                </div>

              </div>

              {/* File */}
              <div>

                <label className="mb-2 block text-sm font-medium">
                  File
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-black/15 bg-[#f7f5f0] px-6 py-10 text-center transition hover:border-black/30 hover:bg-white">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dce8e4]">
                    <FileUp size={22} />
                  </div>

                  <p className="mt-4 text-sm font-medium">
                    {file ? file.name : "Choose a document"}
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    PDF, DOC or DOCX
                  </p>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setFile(e.target.files?.[0] ?? null)
                    }
                    className="hidden"
                  />

                </label>

              </div>

              {/* Submit */}
              <button
                onClick={handleUpload}
                disabled={loading}
                className="flex w-full items-center justify-between rounded-xl bg-[#0b1220] px-5 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 disabled:opacity-50"
              >
                <span>
                  {loading ? "Uploading..." : "Submit resource"}
                </span>

                <Upload size={17} />
              </button>

              {message && (
                <div className="flex items-start gap-3 rounded-xl bg-black/[0.03] p-4 text-sm text-black/60">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <span>{message}</span>
                </div>
              )}

            </div>
          </div>

          {/* Side information */}
          <aside className="space-y-4">

            <div className="rounded-[2rem] bg-[#0b1220] p-7 text-white">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                Before uploading
              </p>

              <h2 className="mt-4 text-2xl font-semibold">
                Make it useful.
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-6 text-white/55">

                <p>
                  Give your resource a clear title so others can find it.
                </p>

                <p>
                  Add the semester and course whenever they apply.
                </p>

                <p>
                  Avoid uploading private or sensitive personal information.
                </p>

              </div>

            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[#d9d4c7] p-7">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                Community
              </p>

              <h2 className="mt-4 text-xl font-semibold">
                One upload can help dozens of students.
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Keep the shared knowledge base useful, organised and easy
                to search.
              </p>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}