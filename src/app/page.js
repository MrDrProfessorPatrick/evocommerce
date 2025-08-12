import Image from "next/image";
import GoodsList from "@/components/GoodsListContainer";

export default async function Home() {
  let goods = await fetch("https://dummyjson.com/products");
  goods = await goods.json();
  console.log("goods", goods);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to Test Store</h1>
      <GoodsList goods={goods} />
    </div>
  );
}
