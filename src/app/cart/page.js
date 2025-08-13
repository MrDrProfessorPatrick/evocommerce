"use client";

import Cart from "@/components/Cart";
import { useContext } from "react";
import { Context } from "@/app/providers";
import BackButton from "@/components/backButton";

export default function CartPage() {
  const { cart } = useContext(Context);
  return (
    <div>
      <BackButton link="/" />
      <h1 className="text-4xl font-bold">Your Cart</h1>
      <Cart cart={cart} />
    </div>
  );
}
