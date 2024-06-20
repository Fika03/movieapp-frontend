import { Header } from "@/components/header/Header";
import React from "react";

export default function moviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col min-h-screen justify-between">
        <section className="flex flex-start">
          <Header />
        </section>
        <section className=" flex justify-center items-center">
          {children}
        </section>
        <section></section>
      </section>
    </>
  );
}
