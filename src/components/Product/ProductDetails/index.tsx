import { titleFont } from "@/config/fonts";
import { Product } from "@/interfaces";
import React from "react";
import { SizeSelector } from "../SizeSelector";
import { QuantitySelector } from "../QuantitySelector";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${titleFont} antialiased font-bold text-xl`}>
        {product.title}
      </h1>
      <p className="text-lg">${product.price.toFixed(2)}</p>
      <SizeSelector
        selectedSize={product.sizes[0]}
        availableSizes={product.sizes}
      />
      <QuantitySelector quantity={2} />
      <button className="btn-primary my-6 sm:max-w-36">Add to Cart</button>
      <h3 className="font-bold text-sm">Description</h3>
      <p className="font-light">{product.description}</p>
    </div>
  );
};
