"use client";

import { motion } from "framer-motion";
import { BookOpen, Coffee, Leaf, Sparkles } from "lucide-react";

type FeatureCardProps = {
  iconName: "coffee" | "sparkles" | "leaf" | "bookOpen";
  title: string;
  description: string;
};

const iconMap = {
  coffee: Coffee,
  sparkles: Sparkles,
  leaf: Leaf,
  bookOpen: BookOpen,
} as const;

export function FeatureCard({ iconName, title, description }: FeatureCardProps) {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-[28px] border border-[#E5D7C5] bg-white/80 p-6 shadow-[0_20px_45px_rgba(90,56,37,0.08)] backdrop-blur-sm"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E5D0] text-[#5A3825] shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-serif text-2xl text-[#2C211B]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5A3825]/75 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
