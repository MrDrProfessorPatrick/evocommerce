"use client";

import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [goods, setGoods] = useState([]);
  const [goodById, setGoodById] = useState();
  const [goodsLayout, setGoodsLayout] = useState({ view: "medium" });
  const [sortBy, setSortBy] = useState("default");
  const [cart, setCart] = useState([]);

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

  function changeGoodsOrder(newOrder) {
    let resultOrder = [];

    for (let i = 0; i < newOrder.length; i++) {
      for (let j = 0; j < goods.length; j++) {
        if (goods[j].id === newOrder[i]) {
          resultOrder.push(goods[j]);
          break;
        }
      }
    }
    console.log("resultOrder", resultOrder);
    setGoods(resultOrder);
  }

  function changeGoodsLayout(newLayout) {
    setGoodsLayout({ view: newLayout });
  }

  function sortByPrice(order) {
    setSortBy(order);
    const sorted = [...goods].sort((a, b) => {
      if (order === "cheaper") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setGoods(sorted);
  }

  function addToCart(goodId) {
    let goodAdded = goods.find((item) => item.id === goodId);
    console.log("goodAdded", goodAdded);
    setCart((prevCart) => [...prevCart, goodAdded]);
  }

  return (
    <Context.Provider
      value={{
        goods,
        cart,
        addToCart,
        goodsLayout,
        changeGoodsLayout,
        findGoodById,
        goodById,
        changeGoodsOrder,
        sortByPrice,
        sortBy,
      }}
    >
      {children}
    </Context.Provider>
  );
}
