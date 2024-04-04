"use client";
import { titleFont } from "@/config/fonts";
import { Product, Size } from "@/interfaces";
import React, { useState } from "react";
import { SizeSelector } from "../SizeSelector";
import { QuantitySelector } from "../QuantitySelector";
import clsx from "clsx";
import { StockLabel } from "./StockLabel";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    if (!size) {
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${titleFont} antialiased font-bold text-xl`}>
        {product.title}
      </h1>
      <StockLabel slug={product.slug} />
      <p className="text-lg">${product.price.toFixed(2)}</p>
      {posted && !size && (
        <span className="text-rose-600 fade-in">You must select a size*</span>
      )}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />
      {product.inStock > 0 ? (
        <>
          (
          <QuantitySelector
            quantity={quantity}
            onChangeQuantity={setQuantity}
          />
          <button onClick={addToCart} className="btn-primary my-6 md:max-w-36">
            Add to Cart
          </button>
          )
        </>
      ) : (
        <button
          onClick={() => {}}
          className="btn-primary my-6 md:max-w-36 opacity-60 cursor-not-allowed"
        >
          Out of stock
        </button>
      )}
      <h3 className="font-bold text-sm">Description</h3>
      <p className="font-light">{product.description}</p>
    </div>
  );
};
