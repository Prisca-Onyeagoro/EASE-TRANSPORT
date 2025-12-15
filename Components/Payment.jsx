// app/order/PaymentModalWrapper.jsx  (or .tsx)
"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentModalWrapper({ payment }) {
  const searchParams = useSearchParams();
  const paymentMode = searchParams.get("modal");

  if (paymentMode !== "payment") return null;

  return <div>{payment}</div>;
}
