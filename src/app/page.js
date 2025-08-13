import Link from "next/link";

import ChangeGoodsLayoutButtons from "@/components/ChangeGoodsLayoutButtons";
import GoodsListContainer from "@/components/GoodsListContainer";
import SortButtons from "@/components/SortButtons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between mb-4">
      <h1 className="font-bold text-3xl px-4 sm:px-6 lg:px-20 py-6 mt-5 ">
        Welcome to Test Store
      </h1>
      <div className="flex w-[80%] justify-end mt-3 mb-3">
        <Link href="/cart">
          <button className="text-white border border-white hover:bg-white hover:text-black transition cursor-pointer pb-3 pt-3 pr-5 pl-5 rounded-md">
            Cart
          </button>
        </Link>
      </div>

      <div>
        <ChangeGoodsLayoutButtons />
      </div>
      <div className="flex w-[80%] justify-end mb-10">
        <SortButtons />
      </div>
      <GoodsListContainer />
    </div>
  );
}
