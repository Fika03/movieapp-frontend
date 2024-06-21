"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function checkoutSucceeded() {
  const searchParams = useSearchParams();

  const paymentDescription = searchParams.get("payment_intent");

  return (
    <Suspense>
      <section>
        <h1>succeeded</h1>
        <span>Your payment Id is: {paymentDescription} </span>
      </section>
    </Suspense>
  );
}
