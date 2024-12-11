"use client";

import { Stock } from "@/data/stock";
import { useRouter } from "next/navigation";

interface StockListProps {
  stocks: Stock[];
}

export default function SearchList({ stocks }: StockListProps) {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/details/${slug}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-white pt-12">All Stocks</h2>

      <section className="flex items-center justify-center p-4 w-full min-h-[550px]">
        {stocks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stocks.map((stock, index) => (
              <div
                key={index}
                onClick={() => handleClick(stock.symbol)}
                className="p-4 cursor-pointer bg-slate-800 rounded-lg shadow hover:bg-slate-700 min-h-[180px] min-w-full"
              >
                <div className="flex gap-4 justify-between h-full w-full">
                  <div className="max-w-[50%]">
                    <h3 className="text-lg font-bold text-white">
                      {stock.name}
                    </h3>
                    <p className="text-slate-400">{stock.symbol}</p>
                  </div>

                  <div className="flex flex-col justify-end items-end h-full w-full">
                    <span className="text-2xl">
                      Value:{" "}
                      <span className="text-green-600">{stock.value}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 bg-slate-800 rounded-lg shadow hover:bg-slate-700 cursor-pointer">
            <h3 className="text-lg font-bold text-white">No Stock Found</h3>
          </div>
        )}
      </section>
    </div>
  );
}
