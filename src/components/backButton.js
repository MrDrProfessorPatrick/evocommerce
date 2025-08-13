"use client";
import { useRouter } from "next/navigation";

export default function BackButton({ link }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(link)}
      className="w-15 h-15 text-white font-bold font-[28px] border border-white hover:bg-white hover:text-black rounded-4xl"
    >
      {"<"}
    </button>
  );
}
