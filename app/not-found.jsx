// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8 text-center">
        Oops! This page doesn't exist.
      </p>
      <p className="text-lg mb-12 text-gray-400 text-center max-w-md">
        You might have typed the address wrong, or the page was moved.
      </p>

      <div className="space-x-4">
        <Link
          href="/"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl text-xl font-semibold transition"
        >
          Back to Home
        </Link>
        <Link
          href="/order"
          className="border border-purple-600 hover:bg-purple-600/20 px-8 py-4 rounded-xl text-xl font-semibold transition"
        >
          Book a Ride
        </Link>
      </div>
    </div>
  );
}
