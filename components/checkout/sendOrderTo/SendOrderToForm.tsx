import { CheckoutContext } from "@/context/checkout/CheckoutContext";
import { FormEvent, useContext } from "react";

export const SendOrderToForm = () => {
  const { handleFormChange, customerOrderInfo } = useContext(CheckoutContext);

  const saveOrderInformation = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={saveOrderInformation}>
      <section>
        <article>
          <input
            type="email"
            name="email"
            value={customerOrderInfo?.email}
            onChange={handleFormChange}
            placeholder="Email *"
          />
          <input
            type="number"
            placeholder="Phone number *"
            name="phoneNo"
            value={customerOrderInfo.phoneNo}
            onChange={handleFormChange}
          />
        </article>
        <article>
          <input
            type="text"
            name="name"
            placeholder="First and last name *"
            onChange={handleFormChange}
            value={customerOrderInfo.name}
          />
          <input
            type="text"
            name="address"
            value={customerOrderInfo.address}
            onChange={handleFormChange}
            placeholder="Street address *"
          />
          <input
            type="text"
            name="city"
            value={customerOrderInfo.city}
            onChange={handleFormChange}
            placeholder="City *"
          />
        </article>
        <button>Continue</button>
      </section>
    </form>
  );
};
