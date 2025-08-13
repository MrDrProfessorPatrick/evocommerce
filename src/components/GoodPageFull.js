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
    <div className="flex flex-col items-center mt-0 min-h-screen bg-gray-800">
      <div className="w-full mt-6 ml-12 h-15 flex justify-start">
        <BackButton link="/" />
      </div>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg mt-14">
        <div className="flex justify-center mb-6">
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-800">
          {title}
        </h1>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
