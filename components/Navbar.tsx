"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openCart, totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled ? "border-b border-[#E8DCCA]/80 bg-[#FFF8F0]/85 backdrop-blur-md" : "bg-[#FFF8F0]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="The Happyy Cup home page"
        >
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#E8DCCA] bg-[#120D0B] p-1 shadow-[0_10px_25px_rgba(18,13,11,0.12)] sm:h-16 sm:w-16">
            <img
              src="/HappyyCupCaféLogo.png"
              alt="The Happyy Cup logo"
              className="h-full w-full rounded-full object-cover"
            />
          </span>
          <span className="font-serif text-lg tracking-tight text-[#2C211B] sm:text-xl">The Happy Cup</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  active
                    ? "text-sm font-medium text-[#2C211B]"
                    : "text-sm font-medium text-[#5A3825]/80 transition hover:text-[#2C211B]"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex items-center gap-2 rounded-full border border-[#E8DCCA] bg-white/80 px-4 py-2 text-sm font-medium text-[#2C211B] transition hover:border-[#D9C7AD] hover:bg-[#F7EFE8]"
          >
            <ShoppingBag className="h-4 w-4" />
            Cart
            {totalItems > 0 ? (
              <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5A3825] px-1 text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            ) : null}
          </button>

          <Link
            href="/menu"
            className="inline-flex items-center rounded-full bg-[#2C211B] px-5 py-2.5 text-sm font-medium text-[#FFF8F0] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#5A3825]"
          >
            View Menu
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((state) => !state)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DCCA] bg-white/80 text-[#2C211B] lg:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#E8DCCA] bg-[#FFF8F0] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    pathname === link.href
                      ? "rounded-2xl bg-[#F3E5D0] px-4 py-3 text-sm font-medium text-[#2C211B]"
                      : "rounded-2xl px-4 py-3 text-sm font-medium text-[#5A3825]"
                  }
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={openCart}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#2C211B] px-5 py-3 text-sm font-medium text-[#FFF8F0]"
              >
                <ShoppingBag className="h-4 w-4" />
                Cart {totalItems > 0 ? `(${totalItems})` : ""}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
