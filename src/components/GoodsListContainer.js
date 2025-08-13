"use client";

import { useContext, useState, useEffect } from "react";
import { Context } from "@/app/providers";
import GoodsList from "./GoodsList";

export default function GoodsListContainer() {
  const { goods, goodsLayout, changeGoodsOrder } = useContext(Context);
  const [gridOption, setGridOption] = useState("grid-cols-2");
  // I created GoodsListContainer component to get goods from context here and make possible to pass goods to GoodsList
  //  in this case I can use GoodsList in different places, for example to show goods in Cart
  useEffect(() => {
    if (goodsLayout?.view === "medium") {
      setGridOption("grid-cols-2");
    }
    if (goodsLayout?.view === "small") {
      setGridOption("grid-cols-1 w-full");
    }
    if (goodsLayout?.view === "big") {
      setGridOption("grid-cols-4");
    }
  }, [goodsLayout]);

  return (
    <GoodsList
      goods={goods}
      view={gridOption}
      changeGoodsOrder={changeGoodsOrder}
    />
  );
}
