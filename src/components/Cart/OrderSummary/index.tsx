"use client";
import { useCartStore } from "@/store";
import React, { useEffect, useState } from "react";
import { currencyFormat } from "../../../utils/currencyFormat";

export const OrderSummary = () => {
  const { subTotal, taxes, total, totalItems } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex flex-col w-full justify-center gap-1">
        <div className="flex justify-between">
          <span className="bg-rose-200 w-20 rounded-md">&nbsp;</span>
          <span className="bg-rose-200 w-20 rounded-md">&nbsp;</span>
        </div>
        <div className="flex justify-between">
          <span className="bg-rose-200 w-16 rounded-md">&nbsp;</span>
          <span className="bg-rose-200 w-8 rounded-md">&nbsp;</span>
        </div>
        <div className="flex justify-between">
          <span className="bg-rose-200 w-20 rounded-md">&nbsp;</span>
          <span className="bg-rose-200 w-8 rounded-md">&nbsp;</span>
        </div>
        <div className="flex justify-between mt-6 mb-1">
          <span className="bg-rose-200 w-20 rounded-md">&nbsp;</span>
          <span className="bg-rose-200 w-12 rounded-md">&nbsp;</span>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2">
      <span>Nº Products </span>
      <span className="text-right">{`${totalItems} ${
        totalItems === 1 ? "item" : "items"
      }`}</span>
      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>
      <span>Taxes - 15%</span>
      <span className="text-right">{currencyFormat(taxes)}</span>
      <span className="text-2xl mt-8 font-medium">Total:</span>
      <span className="text-2xl text-right mt-8 font-medium">
        {currencyFormat(total)}
      </span>
    </div>
  );
};
