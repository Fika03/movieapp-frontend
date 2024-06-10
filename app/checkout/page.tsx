"use client";
import { SendOrderToForm } from "@/components/checkout/sendOrderTo/SendOrderToForm";
import { PayWithStripe } from "@/components/checkout/stripe/PayWithStripe";
import {
  CheckoutContext,
  ICheckoutContext,
} from "@/context/checkout/CheckoutContext";
import { ChangeEvent, useState } from "react";

export default function Checkout() {
  const [checkoutState, setCheckoutState] = useState<ICheckoutContext>({
    customerOrderInfo: {
      email: "",
      phoneNo: "",
      name: "",
      address: "",
      postCode: "",
      city: "",
    },
    handleFormChange: () => {},
  });

  checkoutState.handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyName = e.target.name;

    if (
      e.target.type === "text" ||
      e.target.type === "email" ||
      e.target.type === "number"
    ) {
      setCheckoutState({
        ...checkoutState,
        customerOrderInfo: {
          ...checkoutState.customerOrderInfo,
          [propertyName]: e.target.value,
        },
      });
      console.log(e.target.value);
    }
  };

  return (
    <>
      <CheckoutContext.Provider value={checkoutState}>
        <h1>Checkout</h1>
        <section>
          <SendOrderToForm />
        </section>

        <section>
          <PayWithStripe />
        </section>
      </CheckoutContext.Provider>
    </>
  );
}
