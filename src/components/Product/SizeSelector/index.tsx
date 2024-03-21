import { Size } from "@/interfaces";
import clsx from "clsx";
import React from "react";

interface SizeSelectorProps {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({
  selectedSize,
  availableSizes,
}: SizeSelectorProps) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-2">Available sizes</h3>
      <div className="flex gap-2">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx("hover:underline font-medium p-1", {
              "bg-rose-200 rounded-full ": size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
