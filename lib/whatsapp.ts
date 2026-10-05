import type { CartItem, MenuItem } from "@/types";

export const generateWhatsAppMessage = (
  payload?: Partial<{
    name: string;
    date: string;
    time: string;
    guests: string;
    message: string;
    items: Array<CartItem | MenuItem>;
  }>,
) => {
  const name = payload?.name || "Guest";
  const date = payload?.date || "TBD";
  const time = payload?.time || "TBD";
  const guests = payload?.guests || "2";
  const message = payload?.message || "I'd like to enquire about a visit.";

  const itemLines = payload?.items?.length
    ? payload.items
        .map((item) => {
          const quantity = "quantity" in item ? item.quantity : 1;
          const baseName = item.name;
          return `${baseName} x${quantity}`;
        })
        .join("\n")
    : "No item selected";

  return [
    "Hi The Happyy Cup Cafe!",
    "",
    message,
    "",
    `Name: ${name}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Guests: ${guests}`,
    "",
    payload?.items?.length ? `Order:\n${itemLines}` : "",
    "",
    "Thank you!",
  ]
    .filter(Boolean)
    .join("\n");
};

export const openWhatsApp = (message: string) => {
  const url = `https://wa.me/918070789797?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
