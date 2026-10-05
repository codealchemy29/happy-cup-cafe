"use client";

import { motion } from "framer-motion";
import { Leaf, Plus, Star } from "lucide-react";

import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/types";

export function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group overflow-hidden rounded-[28px] border border-[#E8DCCA] bg-[#FFFDFB] shadow-[0_18px_35px_rgba(90,56,37,0.05)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          {item.popular ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#2C211B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FFF8F0]">
              <Star className="h-3 w-3 fill-current text-[#F9D57E]" />
              Popular
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A8765]">
              {item.category}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-[#2C211B]">{item.name}</h3>
          </div>
          <p className="text-xl font-semibold text-[#5A3825]">₹{item.price}</p>
        </div>

        <p className="text-sm leading-6 text-[#5A3825]/75">{item.description}</p>

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F3E5D0] px-2.5 py-1.5 text-[11px] font-medium text-[#5A3825]">
            <Leaf className="h-3.5 w-3.5 text-[#7A8765]" />
            Vegetarian
          </div>

          <button
            type="button"
            onClick={() => addItem(item)}
            className="inline-flex items-center gap-2 rounded-full bg-[#2C211B] px-4 py-2 text-sm font-medium text-[#FFF8F0] transition-all duration-200 hover:bg-[#5A3825]"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
