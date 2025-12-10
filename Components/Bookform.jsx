import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Form from "./Form";

const Bookform = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <Link href="/">
            <ArrowLeft className="text-purple-700" />
          </Link>
          <p className="font-bold text-purple-700">Back to Home</p>
        </div>
        <Form />
      </div>
      <div className="bg-blue-950 p-3.5 border-2 border-blue-700">
        <p>
          <span className="font-bold">Note:</span> Your fare estimate will be
          calculated based on the distance between your current location and
          destination. You'll be able to review this before completing payment.
        </p>
      </div>
    </div>
  );
};

export default Bookform;
