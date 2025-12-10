"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Default = () => {
  const router = useRouter();
  const Paymentmodal = () => {
    router.push("/order?modal=payment");
  };
  return (
    <>
      <button onClick={Paymentmodal}>Proceed to payment</button>
    </>
  );
};

export default Default;
