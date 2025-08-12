"use client";
import { useContext } from "react";
import { Context } from "@/app/providers";

export default function ChangeGoodsLayoutButtons() {
  const goodsLayouts = ["big", "medium", "small"];
  const { changeGoodsLayout } = useContext(Context);

  return (
    <div className="flex space-x-4">
      {goodsLayouts.map((name) => (
        <button
          className="text-white"
          onClick={() => changeGoodsLayout(name)}
          key={name}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
