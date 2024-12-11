"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { stocks } from "../data/stock-info";
import { Stock } from "@/data/stock";

export default function Searchbar() {
  const [activeSearch, setActiveSearch] = useState<Stock[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      setActiveSearch([]);
      return;
    }

    const filteredStocks = stocks.filter(
      (stock) =>
        stock.name.toLowerCase().includes(query) ||
        stock.symbol.toLowerCase().includes(query)
    );

    setActiveSearch(filteredStocks.slice(0, 5));
  };

  return (
    <form className="w-full max-w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here..."
          className="w-full p-4 pr-12 rounded-full bg-slate-800"
          onChange={(e) => handleSearch(e)}
        />
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full
        hover:bg-slate-700"
        >
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div
          className="absolute top-20 p-4 bg-slate-800 text-white w-full 
          rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"
        >
          {activeSearch.map((s, index) => (
            <span key={index}>
              {s.name} - {s.symbol}
            </span>
          ))}
        </div>
      )}
    </form>
  );
}
