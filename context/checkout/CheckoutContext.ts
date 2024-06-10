import { ICustomerOrder } from "@/models/ICustomerOrder";
import { ChangeEvent, createContext } from "react";

export interface ICheckoutContext {
  customerOrderInfo: ICustomerOrder;
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckoutContext = createContext<ICheckoutContext>({
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
