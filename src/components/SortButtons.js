"use client";
import { useContext } from "react";
import { Context } from "@/app/providers";

export default function SortButtons() {
  const { sortByPrice, sortBy } = useContext(Context);

  return (
    <div className="flex space-x-2">
      <span>Sort by price:</span>
      <button
        className={` ${
          sortBy === "cheaper"
            ? "bg-white text-black"
            : "text-white border border-white hover:bg-white hover:text-black"
        } transition cursor-pointer pb-3 pt-3 pr-5 pl-5 rounded-md`}
        onClick={() => sortByPrice("cheaper")}
      >
        Cheaper
      </button>
      <button
        className={` ${
          sortBy === "expensive"
            ? "bg-white text-black"
            : "text-white border border-white hover:bg-white hover:text-black"
        } transition cursor-pointer pb-3 pt-3 pr-5 pl-5 rounded-md`}
        onClick={() => sortByPrice("expensive")}
      >
        Expensive
      </button>
    </div>
  );
}
