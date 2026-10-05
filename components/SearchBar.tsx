"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A3825]/60" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="search"
        placeholder="Search our menu..."
        aria-label="Search menu"
        className="w-full rounded-full border border-[#E8DCCA] bg-white/80 py-3.5 pl-11 pr-4 text-sm text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
      />
    </div>
  );
}
