"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="sticky top-0 bg-black text-white font-bold">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2 text-2xl md:text-3xl">
          <MapPin className="text-purple-600" />
          <h1 className="font-bold">Ease Transport</h1>
        </div>

        <div className="hidden lg:flex space-x-6 text-2xl">
          <Link href="/details" className="hover:text-purple-400 transition ">
            Details
          </Link>
          <Link href="/book" className="hover:text-purple-400 transition">
            Book a ride
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
