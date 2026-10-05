"use client";

import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "@/context/CartContext";
import type { CartItem as CartItemType } from "@/types";

export function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#E9DCC7] bg-[#FFFDFB] p-3">
      <img src={item.image} alt={item.name} className="h-14 w-14 rounded-xl object-cover" />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-medium text-[#2C211B]">{item.name}</p>
            <p className="mt-1 text-sm text-[#5A3825]">₹{item.price}</p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="text-[#5A3825]/60 transition hover:text-[#5A3825]"
            aria-label={`Remove ${item.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center rounded-full border border-[#E9DCC7] bg-[#F6EFE7] p-1">
            <button
              type="button"
              onClick={() => updateQuantity(item.id, -1)}
              className="flex h-7 w-7 items-center justify-center text-[#2C211B]"
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="min-w-8 text-center text-sm font-medium text-[#2C211B]">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, 1)}
              className="flex h-7 w-7 items-center justify-center text-[#2C211B]"
              aria-label={`Increase quantity of ${item.name}`}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          <p className="font-medium text-[#2C211B]">₹{item.price * item.quantity}</p>
        </div>
      </div>
    </div>
  );
}
