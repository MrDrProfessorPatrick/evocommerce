"use client";
import mockedGoods from "../mockedGoods.json";
import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();
// context provider here hold data for goods, cart, and UI state, and pass it to all other components
export default function Provider({ children }) {
  const [goods, setGoods] = useState([]);
  const [goodById, setGoodById] = useState();
  const [goodsLayout, setGoodsLayout] = useState({ view: "medium" });
  const [sortBy, setSortBy] = useState("default");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        // const response = await fetch("https://dummyjson.com/products");
        // const data = await response.json();
        // mockedGoods.json file is used instead
        setGoods(mockedGoods.products || []);
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
