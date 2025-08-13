"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { Context } from "@/app/providers";
import { CSS } from "@dnd-kit/utilities";

export default function Good({ id, title, thumbnail }) {
  const { addToCart } = useContext(Context);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id);
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Link href={`/gooddescription/${id}`} className="border p-4">
        <Image
          src={thumbnail}
          alt={title}
          width={200}
          height={200}
          className="mb-2"
        />
      </Link>
      <h2 className="text-xl font-bold">{title}</h2>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-green-300 text-white px-4 py-2 rounded-lg font-semibold transform transition duration-200 hover:bg-green-600 hover:scale-105 shadow-md hover:shadow-lg hover:cursor-pointer z-10"
      >
        Add to Cart
      </button>
    </div>
  );
}
