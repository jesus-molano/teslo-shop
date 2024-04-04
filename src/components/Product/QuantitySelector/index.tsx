"use client";
import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import clsx from "clsx";

interface QuantitySelectorProps {
  quantity: number;
  disabled?: boolean;
  onChangeQuantity: (quantity: number) => void;
}
export const QuantitySelector = ({
  quantity,
  disabled,
  onChangeQuantity,
}: QuantitySelectorProps) => {
  const onQuantityChange = (value: number) => {
    if (disabled) return;
    if (quantity + value < 1) return;
    if (quantity + value > 5) return;
    onChangeQuantity(quantity + value);
  };
  return (
    <div className="flex gap-2">
      <button className="group px-2">
        <IoRemoveCircleOutline
          onClick={() => onQuantityChange(-1)}
          size={20}
          className={clsx(
            "group-hover:bg-rose-200 rounded-full",
            disabled &&
              "text-gray-400 cursor-not-allowed group-hover:bg-transparent"
          )}
        />
      </button>
      <span className="w-full max-w-16 text-center px-2 py-2 bg-gray-200 rounded-md ">
        {quantity}
      </span>
      <button className="group px-2">
        <IoAddCircleOutline
          onClick={() => onQuantityChange(1)}
          size={20}
          className={clsx(
            "group-hover:bg-rose-200 rounded-full",
            disabled &&
              "text-gray-400 cursor-not-allowed group-hover:bg-transparent"
          )}
        />
      </button>
    </div>
  );
};
