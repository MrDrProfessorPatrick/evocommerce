"use client";
import GoodsList from "./GoodsList";

export default function Cart({ cart }) {
  return (
    <div className="w-full">
      {cart.length === 0 ? (
        <p className="mt-[200px] text-xl text-center">Your cart is empty</p>
      ) : (
        <GoodsList goods={cart} view={"grid-cols-1 w-full"} />
      )}
    </div>
  );
}
