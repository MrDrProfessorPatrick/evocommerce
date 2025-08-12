"use client";

import React, { createContext } from "react";

const Context = createContext({});

export default function Provider({ children }) {
  return <Context.Provider value="dark">{children}</Context.Provider>;
}
