"use client";
import { Bus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Welcome() {
  const [fade, setFade] = React.useState(false);
  const [drive, setDrive] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const driveTime = setInterval(() => setDrive((prev) => !prev), 2000);
    const fadeEffect = setTimeout(() => setFade(true), 5400);
    const fadeTimer = setTimeout(() => {
      router.push("/details");
    }, 6000);

    return () => clearTimeout(fadeTimer, fadeEffect, driveTime);
  }, [router]);
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center min-h-screen overflow-hidden ${
          fade ? "opacity-0 transition-opacity duration-500" : "opacity-100"
        }`}
      >
        <h1 className="font-bold text-5xl md:text-4xl">
          <span className="bg-linear-to-r from-purple-500 via-purple-600 to-purple-800 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] animate-pulse">
            easetransport
          </span>
        </h1>
        <p className="text-purple-200">
          book in secs, secure travel, fast payment.
        </p>

        <div className="relative h-24 w-full ">
          <div
            className={`transform transition-transform duration-[2000ms] ease-linear ${
              drive ? "translate-x-[120vw]" : "-translate-x-[120vw]"
            }`}
          >
            <Bus size={60} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </>
  );
}
