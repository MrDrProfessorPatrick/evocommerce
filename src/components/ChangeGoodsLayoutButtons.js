"use client";
import { useContext } from "react";
import { Context } from "@/app/providers";

export default function ChangeGoodsLayoutButtons() {
  const goodsLayouts = ["big", "medium", "small"];
  const { changeGoodsLayout, goodsLayout } = useContext(Context);

  return (
    <div className="flex justify-end items-end h-40px space-x-4 pb-5 pt-6 pr-8">
      {goodsLayouts.map((name) => (
        <button
          className={` ${
            goodsLayout.view === name
              ? "bg-white text-black"
              : "text-white border border-white hover:bg-white hover:text-black"
          } transition cursor-pointer pb-3 pt-3 pr-5 pl-5 rounded-md`}
          onClick={() => changeGoodsLayout(name)}
          key={name}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
