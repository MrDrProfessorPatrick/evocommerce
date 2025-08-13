"use client";
import { useContext, useState, useEffect } from "react";
import { Context } from "@/app/providers";
import Good from "./Good";

export default function GoodsList({ goods, view }) {
  console.log("goods", goods);

  return (
    <div className={`grid ${view} gap-4`}>
      {goods &&
        goods.map((good) => (
          <Good
            key={good.id}
            id={good.id}
            title={good.title}
            description={good.description}
            thumbnail={good.thumbnail}
          />
        ))}
    </div>
  );
}
