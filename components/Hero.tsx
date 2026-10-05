"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Sparkles, Star, UtensilsCrossed } from "lucide-react";

const floatingBadges = [
  { label: "4.6 Google Rating", icon: Star },
  { label: "Specialty Coffee", icon: Coffee },
  { label: "Fresh Croissants", icon: Sparkles },
  { label: "Pure Vegetarian", icon: UtensilsCrossed },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(233,184,176,0.25),transparent_30%),linear-gradient(180deg,#FFF8F0_0%,#F8F0E7_100%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#E8DCCA] bg-white/70 px-3 py-1.5 text-sm text-[#5A3825] shadow-sm">
            <Coffee className="h-4 w-4 text-[#7A8765]" />
            Cozy café moments in Thane
          </div>

          <h1 className="font-serif text-5xl leading-[0.95] text-[#2C211B] sm:text-6xl lg:text-7xl">
            A Little Cup of Happy.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A3825]/80">
            Coffee, croissants, comfort food and cozy moments in the heart of Thane.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2C211B] px-6 py-3.5 text-base font-medium text-[#FFF8F0] transition hover:bg-[#5A3825]"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#E8DCCA] bg-white/70 px-6 py-3.5 text-base font-medium text-[#2C211B] transition hover:border-[#D9C7AD] hover:bg-[#F3E5D0]"
            >
              Visit Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[#E9B8B0]/25 blur-3xl md:block" />
          <div className="absolute -right-4 bottom-8 hidden h-32 w-32 rounded-full bg-[#7A8765]/20 blur-3xl md:block" />

          <div className="relative overflow-hidden rounded-[32px] border border-[#E8DCCA] bg-[#F9F1EA] p-3 shadow-[0_30px_60px_rgba(90,56,37,0.12)] sm:p-4">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
              alt="Warm cafe interior with coffee and pastries"
              className="h-[480px] w-full rounded-[26px] object-cover sm:h-[560px]"
            />
          </div>

          {floatingBadges.map((badge, index) => {
            const Icon = badge.icon;
            const positionClasses = [
              "-left-3 top-8 sm:-left-6 sm:top-10",
              "right-3 top-8 sm:right-6 sm:top-10",
              "left-4 bottom-8 sm:left-8 sm:bottom-10",
              "right-4 bottom-8 sm:right-5 sm:bottom-10",
            ];

            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.12 }}
                className={`absolute ${positionClasses[index]} hidden items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-xs font-medium text-[#2C211B] shadow-lg backdrop-blur-sm sm:inline-flex`}
              >
                <Icon className="h-3.5 w-3.5 text-[#7A8765]" />
                {badge.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
