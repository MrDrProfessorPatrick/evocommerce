"use client";

import React, { createContext } from "react";
import { useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [goodsLayout, setGoodsLayout] = useState({ goodsCard: "medium" });

  function changeGoodsLayout(newLayout) {
    setGoodsLayout({ goodsCard: newLayout });
  }
  console.log("goodsLayout", goodsLayout);
  return (
    <Context.Provider value={{ goodsLayout, changeGoodsLayout }}>
      {children}
    </Context.Provider>
  );
}
