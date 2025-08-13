"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { Context } from "@/app/providers";
import { CSS } from "@dnd-kit/utilities";

export default function Good({ id, title, price, thumbnail }) {
  const { addToCart } = useContext(Context);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("Adding to cart:", id);
    addToCart(id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      onPointerDown={() => setIsDragging(false)}
      onPointerMove={() => setIsDragging(true)}
      className="border p-4 rounded-lg bg-gray-400 hover:bg-gray-200 shadow-md hover:shadow-lg flex flex-col items-center justify-between h-full group"
    >
      <Link href={`/gooddescription/${id}`}>
        <Image
          src={thumbnail}
          alt={title}
          width={200}
          height={200}
          className="mb-2"
        />
      </Link>
      <div {...listeners} className="cursor-grab w-full text-center">
        <h2 className="text-2xl font-bold group-hover:text-black">{title}</h2>
        <div className="flex justify-center w-full">
          <span className="text-lg font-semibold ml-1 group-hover:text-black">
            {price} USD
          </span>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-green-300 text-white px-4 py-2 rounded-lg font-semibold transform transition duration-200 hover:bg-green-600 hover:scale-105 shadow-md hover:shadow-lg hover:cursor-pointer z-10"
      >
        Add to Cart
      </button>
    </div>
  );
}
