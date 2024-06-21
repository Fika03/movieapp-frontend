"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function () {
  const searchParams = useSearchParams();

  const paymentDescription = searchParams.get("payment_intent");

  return (
    <section>
      <h1>succeeded</h1>
      <Suspense>
        <span>Your payment Id is: {paymentDescription} </span>
      </Suspense>
    </section>
  );
}
