import Link from 'next/link';

export default function SonoranReserve() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Sonoran Reserve</h1>
        <p className="text-gray-700 mb-6">
          Information about our Sonoran Reserve projects will be available soon.
        </p>
        <Link
          href="/our-work"
          className="inline-block text-[#4A6895] hover:underline"
        >
          ← Back to All Projects
        </Link>
      </div>
    </div>
  );
}

