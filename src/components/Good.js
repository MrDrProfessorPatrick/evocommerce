"use client";
import Image from "next/image";
import Link from "next/link";

export default function Good({ id, title, thumbnail }) {
  return (
    <Link href={`/gooddescription/${id}`} className="border p-4">
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        className="mb-2"
      />
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
  );
}
