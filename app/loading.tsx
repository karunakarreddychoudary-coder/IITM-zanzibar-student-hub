export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 rounded-2xl bg-[#0b1220] animate-pulse" />

        <p className="mt-5 text-sm text-black/45">
          Loading student hub...
        </p>
      </div>
    </main>
  );
}