"use client";
import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import clsx from "clsx";

interface QuantitySelectorProps {
  quantity: number;
  disabled?: boolean;
}
export const QuantitySelector = ({
  quantity,
  disabled,
}: QuantitySelectorProps) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (disabled) return;
    if (count + value < 1) return;
    if (count + value > 5) return;
    setCount(count + value);
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
        {count}
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
