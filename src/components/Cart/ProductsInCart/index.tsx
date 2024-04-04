"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store";
import { QuantitySelector } from "@/components";
import { IoTrashOutline } from "react-icons/io5";
import { ProductsInCartSkeleton } from "./ProductsInCartSkeleton";
import { redirect } from "next/navigation";

interface ProductsInCartProps {}

export const ProductsInCart = ({}: ProductsInCartProps) => {
  const productsInCart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProductFromCart = useCartStore(
    (state) => state.removeProductFromCart
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <ProductsInCartSkeleton />;

  if (productsInCart.length === 0) redirect("/empty");

  return (
    <>
      {productsInCart.map((product) => (
        <div
          key={`${product.slug}-${product.size}`}
          className="flex gap-2 w-full"
        >
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            alt={product.title}
            className="rounded-lg object-top object-cover w-24 h-32"
          />
          <div className="flex flex-col gap-1 flex-1">
            <Link href={`/product/${product.slug}`}>
              <p>
                {product.size} - {product.title}
              </p>
            </Link>
            <p>${product.price.toFixed(2)}</p>
            <div className="flex items-center  justify-between gap-2 w-full">
              <div className="flex-1">
                <QuantitySelector
                  quantity={product.quantity}
                  onChangeQuantity={(quantity) => {
                    updateProductQuantity(product, quantity);
                  }}
                />
              </div>
              <button onClick={() => removeProductFromCart(product)}>
                <IoTrashOutline className="text-rose-700" size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
