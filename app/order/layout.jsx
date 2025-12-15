"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Layout = ({ children, payment, summary }) => {
  const search = useSearchParams();
  const paymentMode = search.get("modal");
  return (
    <>
      <div>{children}</div>

      <div className="md:flex justify-around items-center">
        <div>{paymentMode === "payment" && <div>{payment}</div>}</div>
        <div>{summary}</div>
      </div>
    </>
  );
};

export default Layout;
