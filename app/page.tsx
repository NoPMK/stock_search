"use client";

import Searchbar from "@/components/searchbar";
import SearchList from "@/components/searchlist";
import { Stock } from "@/data/stock";
import { stocks } from "@/data/stock-info";
import { useState } from "react";

export default function Home() {
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>(stocks);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredStocks(stocks);
      return;
    }

    const filteredStocks = stocks.filter(
      (stock) =>
        stock.name.toLowerCase().includes(query) ||
        stock.symbol.toLowerCase().includes(query)
    );

    setFilteredStocks(filteredStocks);
  };

  return (
    <div className="flex min-w-full justify-center min-h-screen lg:p-8 bg-slate-900 font-[family-name:var(--font-geist-sans)]">
      {" "}
      <main className="flex flex-col w-full justify-center items-center">
        <Searchbar onSearch={handleSearch} />
        <SearchList stocks={filteredStocks} />
      </main>
    </div>
  );
}
