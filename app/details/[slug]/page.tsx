"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { stocks } from "@/data/stock-info";
import { Stock } from "@/data/stock";

export default function Details() {
  const router = useRouter();
  const params = useParams();
  const symbol = params.slug;
  const [stock, setStock] = useState<Stock | null>(null);

  useEffect(() => {
    if (!symbol) {
      router.push("/");
      return;
    }

    const stockData = stocks.find((s) => s.symbol === symbol);
    if (!stockData) {
      router.push("/");
      return;
    }
    setStock(stockData);
  }, [symbol, router]);

  if (!stock) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-32 bg-slate-900 text-white">
      <button
        onClick={() => router.push("/")}
        className="mb-6 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700"
      >
        Back to List
      </button>

      <div className="w-full max-w-2xl bg-slate-800 rounded-lg p-6 shadow">
        <div>
          <h1 className="text-3xl font-bold mb-4">{stock.name}</h1>
          <p className="text-lg text-slate-400 mb-2">
            <span className="font-bold text-white">Symbol:</span> {stock.symbol}
          </p>
          <p className="text-lg text-slate-400 mb-2">
            <span className="font-bold text-white">Type:</span> {stock.type}
          </p>
          <p className="text-lg text-slate-400 mb-2">
            <span className="font-bold text-white">Region:</span> {stock.region}
          </p>
          <p className="text-lg text-slate-400 mb-2">
            <span className="font-bold text-white">Currency:</span>{" "}
            {stock.currency}
          </p>
        </div>
        <div className="flex h-full w-full">
          <span className="text-2xl">
            Value: <span className="text-green-600">{stock.value}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
