import React from "react";
import { data } from "@/Components/Data";
const Reason = () => {
  return (
    <div className="mt-24">
      <hr className="text-gray-600 mb-5" />
      <p className="font-bold text-3xl items-center-safe text-center mb-16">
        Why Choose Ease Transport?
      </p>
      <div className=" grid gap-9 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative  bg-black/20 p-6 shadow-9xl border border-purple-700 rounded-2xl"
          >
            <div className="flex flex-col space-y-2">
              <p className="text-purple-600 font-bold">{item.icon}</p>
              <p className="font-bold text-xl">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
            <div className="absolute bg-purple-600 rounded-full px-7 -top-4">
              <span className="font-bold text-lg">{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reason;
