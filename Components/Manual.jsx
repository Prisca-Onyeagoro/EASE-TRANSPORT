import { Clock, MapPin, Receipt } from "lucide-react";
import React from "react";

const Manual = () => {
  return (
    <div className="realative flex flex-col justify-center text-center mt-10 items-center px-8">
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-2xl">How Ease Transport Works</h1>
        <p className="font-extralight text-sm">
          Three simple steps to your destination
        </p>
      </div>
      <div className="mt-5 space-y-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center md:gap-6">
        <div className="relative bg-black/20 p-6 shadow-9xl border border-purple-700 rounded-2xl">
          <div className="items-center flex justify-center flex-col space-y-2">
            <MapPin className="text-purple-700 font-bold" size={30} />
            <p className="font-bold text-xl">Enter Your Details</p>
            <p className="text-gray-600">
              Provide your current location, destination, phone number, and
              preferences.
            </p>
          </div>
          <div className="absolute bg-purple-600 rounded-full px-7 -top-4">
            <span className="font-bold text-lg">1</span>
          </div>
        </div>
        <div className="relative bg-black/20 p-6 shadow-9xl border border-purple-700 rounded-2xl">
          <div className="items-center flex justify-center flex-col space-y-4">
            <Clock className="text-purple-700 font-bold" size={30} />
            <p className="font-bold text-xl">Confirm & Pay</p>
            <p className="text-gray-600">
              Review the fare estimate and complete a secure payment
            </p>
          </div>
          <div className="absolute bg-purple-600 rounded-full px-7 -top-4">
            <span className="font-bold text-lg">2</span>
          </div>
        </div>
        <div className="relative bg-black/20 p-6 shadow-9xl border border-purple-700 rounded-2xl">
          <div className="items-center flex justify-center flex-col space-y-4">
            <Receipt className="text-purple-700 font-bold" size={30} />
            <p className="font-bold text-xl">Get Your Reciept</p>
            <p className="text-gray-600">
              Receive a detailed reciept and travel confrmation
            </p>
          </div>
          <div className="absolute bg-purple-600 rounded-full px-7 -top-4">
            <span className="font-bold text-lg">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manual;
