"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { galleryImages } from "@/data/gallery";
import { Lightbox } from "@/components/Lightbox";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToNext = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current + 1) % galleryImages.length,
    );
  };
  const goToPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <motion.button
            key={`${image.src}-${image.alt}`}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={() => openLightbox(index)}
            className="group relative mb-4 block w-full overflow-hidden rounded-[26px] text-left"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-[26px] object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-[26px] bg-gradient-to-t from-[#2C211B]/55 via-[#2C211B]/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 pb-4 text-white opacity-0 transition group-hover:opacity-100">
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm">
                {image.category}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={galleryImages}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </>
  );
}
