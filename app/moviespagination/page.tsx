"use client";
import { SelectMoviePage } from "@/components/MovieComponents/pagination/SelectMoviePage";
import { Navigate } from "@/components/navigation/Navigate";
import { useCart } from "@/context/cart/CartContext";
import React from "react";

export default function MoviePagination() {
  const { state } = useCart();

  return (
    <section className="flex items-center flex-col">
      <section>
        <SelectMoviePage />
      </section>
    </section>
  );
}
