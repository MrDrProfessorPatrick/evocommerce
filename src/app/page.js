import Image from "next/image";
import GoodsList from "@/components/GoodsListContainer";
import ChangeGoodsLayoutButtons from "@/components/ChangeGoodsLayoutButtons";

export default async function Home() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Welcome to Test Store</h1>
      <ChangeGoodsLayoutButtons />
      <div className="">
        <GoodsList />
      </div>
    </div>
  );
}
