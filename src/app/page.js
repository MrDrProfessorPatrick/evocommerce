import Image from "next/image";
import GoodsList from "@/components/GoodsListContainer";

export default async function Home() {
  const goodsLayouts = ["big", "medium", "small"];

  let goods = await fetch("https://dummyjson.com/products");
  goods = await goods.json();
  console.log("goods", goods);
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Welcome to Test Store</h1>
      <div className="flex space-x-4">
        {goodsLayouts.map((name) => (
          <button className="text-white" key={name}>
            {name}
          </button>
        ))}
      </div>
      <div className="">
        <GoodsList goods={goods} />
      </div>
    </div>
  );
}
