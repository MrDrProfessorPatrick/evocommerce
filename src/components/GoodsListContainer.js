"use client";
import { useContext, useState, useEffect } from "react";
import { Context } from "@/app/providers";
import Good from "./Good";

export default function GoodsList() {
  const { goods, goodsLayout } = useContext(Context);
  console.log("goods", goods);
  const [gridOption, setGridOption] = useState("grid-cols-2");

  useEffect(() => {
    if (goodsLayout?.view === "medium") {
      setGridOption("grid-cols-2");
    }
    if (goodsLayout?.view === "small") {
      setGridOption("grid-cols-1");
    }
    if (goodsLayout?.view === "big") {
      setGridOption("grid-cols-4");
    }
  }, [goodsLayout]);

  return (
    <div className={`grid ${gridOption} gap-4`}>
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
