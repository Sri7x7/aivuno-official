import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aivuno - Next Level SaaS Starter</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
          Aivuno Official
        </h1>
        <p className="max-w-xl text-xl text-gray-700 mb-8 text-center">
          Next.js • Supabase • Stripe • Tailwind • TypeScript
        </p>
        <div className="flex gap-6">
          <a
            href="/signup"
            className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
          >
            Get Started
          </a>
          <a
            href="/features"
            className="px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold border border-purple-200 shadow hover:bg-purple-50 transition"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 text-sm text-gray-400">
          © {new Date().getFullYear()} Aivuno. All rights reserved.
        </div>
      </main>
    </>
  );
}