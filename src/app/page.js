import Image from "next/image";

import GoodsList from "@/components/GoodsListContainer";
import Cart from "@/components/Cart";
import ChangeGoodsLayoutButtons from "@/components/ChangeGoodsLayoutButtons";
import GoodsListContainer from "@/components/GoodsListContainer";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Welcome to Test Store</h1>
      <ChangeGoodsLayoutButtons />
      <GoodsListContainer />
    </div>
  );
}
