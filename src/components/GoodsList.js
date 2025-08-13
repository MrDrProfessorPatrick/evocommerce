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

export default function GoodsList({ goods, view }) {
  const [items, setItems] = useState(goods.map((g) => g.id));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id);
        const newIndex = prev.indexOf(over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={rectSortingStrategy}>
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
