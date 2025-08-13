"use client";

import Cart from "@/components/Cart";
import { useContext } from "react";
import { Context } from "@/app/providers";
import BackButton from "@/components/backButton";

export default function CartPage() {
  const { cart } = useContext(Context);
  return (
    <div className="flex flex-col items-center justify-between mb-4">
      <div className="w-full ml-12 mt-15 flex justify-start">
        <BackButton link="/" />
      </div>
      <div className="flex justify-center items-center py-6 mt-5">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          Your Cart
        </h1>
      </div>
      <Cart cart={cart} />
    </div>
  );
}
