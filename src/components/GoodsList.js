"use client";
import { useContext, useState, useEffect } from "react";
import { Context } from "@/app/providers";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Good from "./Good";

export default function GoodsList({ goods, view, changeGoodsOrder }) {
  const goodsIds = goods.map((good) => good.id);
  console.log("items", goodsIds);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = goodsIds.indexOf(active.id);
      const newIndex = goodsIds.indexOf(over.id);
      let changed = arrayMove(goodsIds, oldIndex, newIndex);
      changeGoodsOrder(changed);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={goodsIds} strategy={rectSortingStrategy}>
        <div className={`grid ${view} gap-4`}>
          {goods &&
            goods.map((good) => (
              <Good
                key={good.id}
                id={good.id}
                title={good.title}
                description={good.description}
                thumbnail={good.thumbnail}
              />
            ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
