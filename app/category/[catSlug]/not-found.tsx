import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
        <div className="text-4xl">⚠️</div>
        <h1 className="mt-4 text-xl font-bold text-gray-900">
          ক্যাটাগরি খুজে পাওয়া যায়নি
        </h1>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-success px-5 py-3 text-sm font-semibold text-white transition"
        >
          হোমে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
