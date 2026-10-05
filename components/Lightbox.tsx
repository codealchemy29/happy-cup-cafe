"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { GalleryImage } from "@/types";

type LightboxProps = {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function Lightbox({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  const activeImage =
    selectedIndex !== null && images[selectedIndex] ? images[selectedIndex] : null;

  return (
    <AnimatePresence>
      {activeImage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#2C211B]/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2C211B] shadow-lg"
              aria-label="Close gallery image"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-[28px] bg-[#FFF8F0] shadow-2xl">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[72vh] w-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-[#FFF8F0]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#F3E5D0]">
                  {activeImage.category}
                </p>
                <p className="mt-1 text-sm">{activeImage.alt}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
