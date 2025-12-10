"use client";
import React from "react";
import { useState } from "react";
import CardDetails from "@/Components/CardDetails";
import WalletDetails from "@/Components/WalletDetails";

const page = () => {
  const [Selected, setSelected] = useState("card");
  return (
    <div className="p-7">
      <div className="bg-gray-900 p-8 rounded-xl text-white space-y-8 xl:w-md">
        <div className="space-y-7">
          <p className="font-bold">Payment Method</p>

          <label className="flex space-x-3.5 border-2  p-4 rounded-xl border-purple-500">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={Selected === "card"}
              onChange={() => setSelected("card")}
              className={
                Selected === "card" ? "accent-green-700" : "bg-gray-700"
              }
            />
            <span className="font-bold text-base">Credit/Debit Card</span>
          </label>
        </div>

        <div>
          <label className="flex space-x-3.5 border-2  p-4 rounded-xl border-purple-500">
            <input
              type="radio"
              name="wallet"
              value="wallet"
              checked={Selected === "wallet"}
              onChange={() => setSelected("wallet")}
              className={
                Selected === "wallet" ? "accent-green-700" : "bg-gray-700"
              }
            />
            <span className="font-bold text-base">Digital Wallet</span>
          </label>
        </div>
        {Selected === "card" && <CardDetails />}
        {Selected === "wallet" && <WalletDetails />}
      </div>
    </div>
  );
};

export default page;
