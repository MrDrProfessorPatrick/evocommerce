"use client";

import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [goods, setGoods] = useState([]);
  const [goodById, setGoodById] = useState(null);
  const [goodsLayout, setGoodsLayout] = useState({ view: "medium" });

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setGoods(data.products || []);
      } catch (error) {
        console.error("Error fetching goods:", error);
      }
    };

    fetchGoods();
  }, []);

  function findGoodById(id) {
    const numericId = parseInt(id);
    const found = goods.find((good) => good.id === numericId);
    setGoodById(found || null);
    return found;
  }

  function changeGoodsLayout(newLayout) {
    setGoodsLayout({ view: newLayout });
  }

  return (
    <Context.Provider
      value={{
        goods,
        goodsLayout,
        changeGoodsLayout,
        findGoodById,
        goodById,
      }}
    >
      {children}
    </Context.Provider>
  );
}
