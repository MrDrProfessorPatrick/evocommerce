"use client";
import { useContext } from "react";
import { Context } from "@/app/providers";
import Good from "./Good";

export default function GoodsList({ goods }) {
  console.log("goods GoodsListContainer");
  const context = useContext(Context);
  console.log("context", context);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {goods.products.map((good) => (
        <Good key={good.id} title={good.title} description={good.description} />
      ))}
    </div>
  );
}
