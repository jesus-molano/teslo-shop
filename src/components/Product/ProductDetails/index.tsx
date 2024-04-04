import { titleFont } from "@/config/fonts";
import { Product } from "@/interfaces";
import React from "react";
import { SizeSelector } from "../SizeSelector";
import { QuantitySelector } from "../QuantitySelector";
import clsx from "clsx";
import { StockLabel } from "./StockLabel";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${titleFont} antialiased font-bold text-xl`}>
        {product.title}
      </h1>
      <StockLabel slug={product.slug} />
      <p className="text-lg">${product.price.toFixed(2)}</p>
      <SizeSelector
        selectedSize={product.sizes[0]}
        availableSizes={product.sizes}
      />
      {product.inStock !== 0 && <QuantitySelector quantity={2} />}
      <button
        className={clsx("btn-primary my-6 md:max-w-36", {
          "cursor-not-allowed opacity-50": product.inStock === 0,
        })}
      >
        Add to Cart
      </button>
      <h3 className="font-bold text-sm">Description</h3>
      <p className="font-light">{product.description}</p>
    </div>
  );
};
