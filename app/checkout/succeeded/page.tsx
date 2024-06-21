"use client";

import { Loading } from "@/components/Loading";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function checkoutSucceeded() {
  const searchParams = useSearchParams();

  const paymentDescription = searchParams.get("payment_intent");

  return (
    <Suspense fallback={<Loading />}>
      <section>
        <h1>succeeded</h1>
        <span>Your payment Id is: {paymentDescription} </span>
      </section>
    </Suspense>
  );
}
