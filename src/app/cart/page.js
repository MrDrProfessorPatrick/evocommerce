"use client";

import Cart from "@/components/Cart";
import { useContext } from "react";
import { Context } from "@/app/providers";

export default function CartPage() {
  const { cart } = useContext(Context);
  console.log("cart", cart);
  return (
    <div>
      <h1 className="text-4xl font-bold">Your Cart</h1>
      <Cart cart={cart} />
    </div>
  );
}
