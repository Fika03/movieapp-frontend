import { IMovie } from "./IMovie";

export interface CartState {
  items: IMovie[];
  totalAmount: number;
}
