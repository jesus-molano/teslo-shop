"use client";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface ProductdGridItemProps {
  product: Product;
}
export const ProductdGridItem = ({ product }: ProductdGridItemProps) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover rounded"
          width={400}
          height={400}
          onMouseEnter={() => {
            setDisplayImage(product.images[1]);
          }}
          onMouseLeave={() => {
            setDisplayImage(product.images[0]);
          }}
        />
      </Link>
      <div className="flex flex-col p-4 ">
        <Link className="hover:text-rose-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};
