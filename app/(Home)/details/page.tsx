import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "journey-details",
  description: "view details of your journey",
};

const details = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        src="/images/EASEiMAGE.jpeg"
        alt="backgroun-images"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/90"></div>
      <div className="relative z-10 space-y-5 flex flex-col justify-center items-center mt-12 ">
        <h1 className="font-bold text-4xl mt-4">
          Get Moving With <span className="text-purple-700">Ease</span>
        </h1>
        <p>
          Fast, reliable, and affordable transportation at your fingertips. Book
          your ride in seconds.
        </p>
        <div className="bg-purple-500 max-w-48 flex p-4 rounded-full space-x-2">
          <Link href="/book" className="flex">
            <button className="font-bold">Book a ride now</button>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default details;
