import type { MenuCategory } from "@/types";

type MenuFiltersProps = {
  categories: MenuCategory[];
  selectedCategory: MenuCategory;
  onSelect: (category: MenuCategory) => void;
};

export function MenuFilters({
  categories,
  selectedCategory,
  onSelect,
}: MenuFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((category) => {
        const active = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={
              active
                ? "rounded-full bg-[#2C211B] px-4 py-2 text-sm font-medium text-[#FFF8F0] shadow-sm"
                : "rounded-full border border-[#E8DCCA] bg-white/80 px-4 py-2 text-sm font-medium text-[#5A3825] transition hover:border-[#D9C7AD] hover:bg-[#F3E5D0]"
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
