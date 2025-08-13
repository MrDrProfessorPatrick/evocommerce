"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/app/providers";
import BackButton from "./backButton";

export default function GoodPageFull() {
  const { id } = useParams();
  const { findGoodById } = useContext(Context);
  const [good, setGood] = useState(null);

  useEffect(() => {
    if (id) {
      const good = findGoodById(id);
      console.log("Good found:", good);
      setGood(good);
    }
  }, [id, findGoodById]);

  if (!id) {
    return <div>Good not found</div>;
  }

  if (!good) {
    return <div>Loading...</div>;
  }

  const { title, description, thumbnail } = good;

  return (
    <div className="p-4">
      <BackButton link="/" />
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={400}
        className="mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
