"use client";
import { CartProducts } from "@/components/checkout/products/CartProducts";
import { SendOrderToForm } from "@/components/checkout/sendOrderTo/SendOrderToForm";
import { PayWithStripe } from "@/components/checkout/stripe/PayWithStripe";
import { Navigate } from "@/components/navigation/Navigate";
import { useCart } from "@/context/cart/CartContext";
import {
  CheckoutContext,
  ICheckoutContext,
} from "@/context/checkout/CheckoutContext";
import { ChangeEvent, useState } from "react";

export default function Checkout() {
  const { state } = useCart();
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
        <section className="flex flex-col items-center min-h-screen xl:justify-center">
          <section className="flex">
            <h1>Checkout</h1>
          </section>
          <section className="xl:flex xl:flex-row-reverse">
            <article className="hidden xl:flex xl:justify-center xl:items-center">
              <CartProducts />
            </article>
            <section>
              <article className="flex justify-center m-3">
                <button
                  className="xl:hidden fixed md:w-4/6 bg-white text-black w-full top-0"
                  onClick={() => setOpen((prev) => !open)}
                >
                  Cart
                </button>

                {open && (
                  <div className="xl:hidden">
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
                {state.items.length > 0 ? (
                  <PayWithStripe />
                ) : (
                  <Navigate navigateTo="/movies">
                    Your cart is empty. Go shopping
                  </Navigate>
                )}
              </section>
            </section>
          </section>
        </section>
      </CheckoutContext.Provider>
    </>
  );
}
