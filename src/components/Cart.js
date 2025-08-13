"use client";
import GoodsList from "./GoodsList";

export default function Cart({ cart }) {
  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <GoodsList goods={cart} />
      )}
    </div>
  );
}
