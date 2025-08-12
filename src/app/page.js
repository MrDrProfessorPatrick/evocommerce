import Image from "next/image";
import GoodsList from "@/components/GoodsListContainer";
import ChangeGoodsLayoutButtons from "@/components/ChangeGoodsLayoutButtons";

export default async function Home() {
  let goods = await fetch("https://dummyjson.com/products");
  goods = await goods.json();
  console.log("goods", goods);
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Welcome to Test Store</h1>
      <ChangeGoodsLayoutButtons />
      <div className="">
        <GoodsList goods={goods} />
      </div>
    </div>
  );
}
