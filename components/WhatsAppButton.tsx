"use client";

import { MessageCircle } from "lucide-react";

import { generateWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <button
      type="button"
      title="Chat with us"
      aria-label="Chat with us on WhatsApp"
      onClick={() =>
        openWhatsApp(
          generateWhatsAppMessage({
            name: "Guest",
            date: "TBD",
            time: "TBD",
            guests: "2",
            message: "I'd like to enquire about a visit.",
          }),
        )
      }
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_30px_rgba(37,211,102,0.35)] transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
