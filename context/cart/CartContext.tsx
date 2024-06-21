"use client";

import { IMovie } from "@/models/IMovie";
import { CartState } from "@/models/cartState";
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";

interface CartContextProps {
  state: CartState;
  addItemToCart: (item: IMovie) => void;
  removeItemFromCart: (item: IMovie) => void;
  removeOneItemFromCart: (item: IMovie) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

type Action =
  | { type: "ADD_ITEM"; payload: IMovie }
  | { type: "REMOVE_ITEM"; payload: IMovie }
  | { type: "INITIALIZE_CART"; payload: CartState }
  | { type: "REMOVE_ONE_ITEM"; payload: IMovie };

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "REMOVE_ONE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.imdbID === action.payload.imdbID
      );
      let updatedItems;
      if (existingItemIndex !== -1) {
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex && item.amount > 1
            ? { ...item, amount: item.amount - 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, amount: 1 }];
      }
      const updatedState = {
        ...state,
        items: updatedItems,
        totalAmount:
          action.payload.amount > 1
            ? state.totalAmount - action.payload.price
            : state.totalAmount,
      };
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    }
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.imdbID === action.payload.imdbID
      );
      let updatedItems;
      if (existingItemIndex !== -1) {
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, amount: 1 }];
      }
      const updatedState = {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.payload.price,
      };
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.imdbID !== action.payload.imdbID
      );
      const removedItem = state.items.find(
        (item) => item.imdbID === action.payload.imdbID
      );
      const newState = {
        ...state,
        items: updatedItems,
        totalAmount: removedItem
          ? state.totalAmount - removedItem.amount * removedItem.price
          : state.totalAmount,
      };
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "INITIALIZE_CART":
      return action.payload;
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart) as CartState;
        dispatch({ type: "INITIALIZE_CART", payload: parsedCart });
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  const addItemToCart = (item: IMovie) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (item: IMovie) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };
  const removeOneItemFromCart = (item: IMovie) => {
    dispatch({ type: "REMOVE_ONE_ITEM", payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItemToCart,
        removeItemFromCart,
        removeOneItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
