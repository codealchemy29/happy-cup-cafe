"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingBag, X } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { openWhatsApp } from "@/lib/whatsapp";
import { generateWhatsAppMessage } from "@/lib/whatsapp";
import { CartItem } from "@/components/CartItem";

export function CartDrawer() {
  const { items, isOpen, subtotal, totalItems, closeCart } = useCart();

  const handleSubmit = () => {
    const message = generateWhatsAppMessage({
      name: "Guest",
      date: "TBD",
      time: "TBD",
      guests: String(Math.max(1, totalItems)),
      message: "I'd like to enquire about my order.",
      items,
    });
    openWhatsApp(message);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-[#2C211B]/40 backdrop-blur-[2px]"
            aria-label="Close cart"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#FFF8F0] p-5 shadow-[0_15px_40px_rgba(44,33,27,0.18)]"
          >
            <div className="flex items-center justify-between border-b border-[#E8DCCA] pb-4">
              <div className="flex items-center gap-2 text-[#2C211B]">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Your Order</h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="rounded-full border border-[#E8DCCA] p-2 text-[#5A3825]"
                aria-label="Close cart drawer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 flex-1 space-y-4 overflow-y-auto pr-1">
              {items.length === 0 ? (
                <div className="rounded-[24px] border border-dashed border-[#E8DCCA] bg-white/70 p-6 text-center text-[#5A3825]/70">
                  Your cart is empty. Add a few cosy favourites to get started.
                </div>
              ) : (
                items.map((item) => <CartItem key={item.id} item={item} />)
              )}
            </div>

            <div className="mt-5 border-t border-[#E8DCCA] pt-5">
              <div className="mb-4 flex items-center justify-between text-[#2C211B]">
                <span className="text-base">Subtotal</span>
                <span className="text-xl font-semibold">₹{subtotal}</span>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={items.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2C211B] px-5 py-3.5 text-base font-medium text-[#FFF8F0] transition hover:bg-[#5A3825] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send Order Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
