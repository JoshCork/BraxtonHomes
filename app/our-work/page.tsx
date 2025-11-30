import Link from 'next/link';

export default function OurWork() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">All Projects</h1>
        <p className="text-gray-700 mb-6">
          Browse our portfolio of custom homes and projects.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/portfolio-items/pinnacle-canyon" className="text-[#4A6895] hover:underline">
            Pinnacle Canyon →
          </Link>
          <Link href="/portfolio-items/sonoran-reserve" className="text-[#4A6895] hover:underline">
            Sonoran Reserve →
          </Link>
          <Link href="/portfolio-items/talus" className="text-[#4A6895] hover:underline">
            Talu →
          </Link>
        </div>
        <Link
          href="/"
          className="inline-block mt-8 text-[#4A6895] hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

