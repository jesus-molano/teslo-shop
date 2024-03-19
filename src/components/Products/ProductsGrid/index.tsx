import { Product } from "@/interfaces";
import React from "react";
import { ProductdGridItem } from "./ProductdGridItem";

interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductdGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
