import { CheckoutContext } from "@/context/checkout/CheckoutContext";
import { FormEvent, useContext } from "react";
import styles from "./SendOrderToForm.module.css";

export const SendOrderToForm = () => {
  const { handleFormChange, customerOrderInfo } = useContext(CheckoutContext);

  const saveOrderInformation = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={saveOrderInformation}>
      <section className="flex flex-col justify-center w-full">
        <article className="flex flex-col gap-4 m-2 md:flex-row md:gap-2">
          <input
            className={styles.formInput}
            type="email"
            name="email"
            value={customerOrderInfo?.email}
            onChange={handleFormChange}
            placeholder="Email *"
          />
          <input
            className={styles.formInput}
            type="number"
            placeholder="Phone number *"
            name="phoneNo"
            value={customerOrderInfo.phoneNo}
            onChange={handleFormChange}
          />
        </article>
        <article className="flex flex-col gap-4 m-2">
          <input
            className={styles.formInput}
            type="text"
            name="name"
            placeholder="First and last name *"
            onChange={handleFormChange}
            value={customerOrderInfo.name}
          />
          <input
            className={styles.formInput}
            type="text"
            name="address"
            value={customerOrderInfo.address}
            onChange={handleFormChange}
            placeholder="Street address *"
          />
          <input
            className={styles.formInput}
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
