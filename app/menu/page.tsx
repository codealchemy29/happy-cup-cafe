"use client";

import { useMemo, useState } from "react";

import { MenuCard } from "@/components/MenuCard";
import { MenuFilters } from "@/components/MenuFilters";
import { SearchBar } from "@/components/SearchBar";
import { SectionHeading } from "@/components/SectionHeading";
import { menuCategories, menuItems } from "@/data/menu";
import type { MenuCategory } from "@/types";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [search, selectedCategory]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Our menu"
        title="Everything made to feel like home."
        description="From flaky croissants to comforting plates, every bite is made for slow, happy moments."
      />

      <div className="mt-8 space-y-5">
        <SearchBar value={search} onChange={setSearch} />
        <MenuFilters
          categories={menuCategories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="mt-10">
        {filteredItems.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-[#E7D9C8] bg-white/60 px-6 py-14 text-center text-[#5A3825]">
            No items found.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
