import Image from "next/image";
import Link from "next/link";

import ChangeGoodsLayoutButtons from "@/components/ChangeGoodsLayoutButtons";
import GoodsListContainer from "@/components/GoodsListContainer";
import SortButtons from "@/components/SortButtons";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Welcome to Test Store</h1>
      <div className="">
        <Link href="/cart">
          <button className="text-white border border-white hover:bg-white hover:text-black transition cursor-pointer pb-3 pt-3 pr-5 pl-5 rounded-md">
            Cart
          </button>
        </Link>
        <SortButtons />
        <ChangeGoodsLayoutButtons />
      </div>
      <GoodsListContainer />
    </div>
  );
}
