import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-10 py-12">
        <div className="max-w-3xl mx-auto w-full text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-[#e8f5ec] text-[#014F2A] font-medium text-sm mb-6">
            Coming Soon
          </div>

          <h1 className="text-5xl leading-12 sm:text-6xl font-black text-[#014F2A] mb-6">
            We're Planting <br className="hidden sm:block" />
            Something Special
          </h1>

          <p className="text-gray-700 leading-6 text-lg mb-12 max-w-xl mx-auto">
            This page is currently under development. Please check back soon for
            updates or return to our homepage to explore other sections of our
            platform.
          </p>

          <Link
            href="/"
            className="bg-[#014F2A] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#013d20] transition-colors inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
