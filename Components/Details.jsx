import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const Details = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black overflow-y-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/EASEiMAGE.jpeg"
          alt="background-images"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <h1 className="font-bold text-5xl lg:text-6xl leading-tight">
                Get Moving with <span className="text-purple-500">Ease</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-xl ">
                Fast, reliable, and affordable transportation at your
                fingertips. Book your ride in seconds.
              </p>
              <div>
                <Link href="/book">
                  <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2">
                    Book Your Ride Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/images/EASEiMAGE.jpeg"
                  alt="city-street"
                  fill
                  className="object-cover rounded-tl-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
