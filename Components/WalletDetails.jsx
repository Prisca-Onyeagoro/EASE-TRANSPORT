import { useRouter } from "next/navigation";
import React from "react";

const WalletDetails = () => {
  const router = useRouter();
  const Paymode = () => {
    router.push("/reciept");
  };
  return (
    <div className="bg-purple-600 p-7 rounded-2xl items-center-safe text-center">
      <button
        onClick={Paymode}
        className="font-bold hover:cursor text-base md:text-xl items-center"
      >
        Pay N4800
      </button>
    </div>
  );
};

export default WalletDetails;
