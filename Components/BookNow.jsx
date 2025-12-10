import React from "react";

const BookNow = () => {
  return (
    <div className="space-y-6 flex flex-col justify-center text-center mt-14">
      <div>
        <p className="font-bold text-2xl">Ready to Book Your Ride?</p>
        <p className="md:text-xl md:font-medium">
          Join thousands of satisfied customers using Ease Transport.
        </p>
      </div>

      <div className="xl:justify-center xl:flex ">
        <button className="hover:pointer bg-purple-700 text-white font-bold rounded-full py-4 px-8 ">
          Start Your Journey Now
        </button>
      </div>
    </div>
  );
};

export default BookNow;
