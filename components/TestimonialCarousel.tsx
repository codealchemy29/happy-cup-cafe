"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

import { reviews } from "@/data/reviews";

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const item = reviews[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#E8DCCA] bg-[linear-gradient(135deg,#FFF8F0_0%,#F8EFE6_100%)] p-8 shadow-[0_20px_40px_rgba(90,56,37,0.06)] sm:p-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-1 text-[#D7A24A]">
            {Array.from({ length: item.rating }).map((_, index) => (
              <Star key={`${item.name}-${index}`} className="h-5 w-5 fill-current" />
            ))}
          </div>

          <p className="mx-auto max-w-2xl font-serif text-2xl leading-relaxed text-[#2C211B] sm:text-3xl">
            “{item.text}”
          </p>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-[#7A8765]">
            {item.name}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center gap-2">
        {reviews.map((review, index) => (
          <button
            key={review.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={
              index === activeIndex
                ? "h-2.5 w-8 rounded-full bg-[#2C211B]"
                : "h-2.5 w-2.5 rounded-full bg-[#D7C6B4]"
            }
          />
        ))}
      </div>
    </div>
  );
}
