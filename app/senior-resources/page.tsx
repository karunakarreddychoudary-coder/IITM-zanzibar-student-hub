export default function SeniorResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">
            Senior Resources
          </h1>

          <p className="text-gray-300 mt-4">
            Guides, notes, previous papers and experiences
            contributed by seniors.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">

        <div className="bg-white rounded-2xl border p-8">

          <h2 className="text-2xl font-bold">
            Contribute a Resource
          </h2>

          <p className="text-gray-600 mt-3">
            The upload system will be connected later using
            Supabase. For now, this is the resource hub.
          </p>

          <button className="mt-6 px-5 py-3 bg-black text-white rounded-lg">
            Upload Resource
          </button>

        </div>

      </section>
    </main>
  );
}