"use client";
import { CartProducts } from "@/components/checkout/products/CartProducts";
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
  const [open, setOpen] = useState<boolean>(false);
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
    }
  };

  return (
    <>
      <CheckoutContext.Provider value={checkoutState}>
        <h1>Checkout</h1>
        <section className="xl:flex xl:flex-row-reverse">
          <article className="hidden md:block">
            <CartProducts />
          </article>
          <section>
            <article>
              <button
                className="md:hidden fixed bg-white text-black w-full top-0 left-0"
                onClick={() => setOpen((prev) => !open)}
              >
                Cart
              </button>

              {open && (
                <div className="md:hidden">
                  <CartProducts />
                </div>
              )}
            </article>
          </section>
          <section className="flex justify-center flex-col items-center">
            <section>
              <SendOrderToForm />
            </section>

            <section>
              <PayWithStripe />
            </section>
          </section>
        </section>
      </CheckoutContext.Provider>
    </>
  );
}
