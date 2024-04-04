"use client";
import { getStockBySlug } from "@/actions";
import React, { useEffect, useState } from "react";

const stockMessage = (stock: number) => {
  if (stock > 50) return "";
  if (stock >= 2) return "Hurry! Only a few left";
  if (stock === 1) return "Last one in stock";
  return "Out of stock";
};

interface StockLabelProps {
  slug: string;
}

export const StockLabel = ({ slug }: StockLabelProps) => {
  const [stockLabel, setStockLabel] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStockLabel(stockMessage(inStock));
    setIsLoading(false);
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="text-sm text-rose-500 w-full h-7 rounded-md bg-rose-200 animate-pulse">
          &nbsp;
        </p>
      ) : (
        <p className="text-sm text-rose-500 h-7 fade-in">{stockLabel}</p>
      )}
    </>
  );
};
