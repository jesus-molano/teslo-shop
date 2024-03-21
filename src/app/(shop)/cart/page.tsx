import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import {
  IoRemoveOutline,
  IoTrashBinOutline,
  IoTrashOutline,
} from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center px-10 sm:px-0">
      <div className="flex flex-col w-full max-w-[1000px] gap-5 ">
        <Title title="Cart" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4  ">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline">
              Continue shopping
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex gap-2 w-full">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="rounded-lg object-top object-cover w-24 h-32"
                />
                <div className="flex flex-col gap-1 flex-1">
                  <p>{product.title}</p>
                  <p>${product.price.toFixed(2)}</p>
                  <div className="flex items-center  justify-between gap-2 w-full">
                    <div className="flex-1">
                      <QuantitySelector quantity={0} />
                    </div>
                    <button>
                      <IoTrashOutline className="text-rose-700" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col bg-white rounded-xl shadow-xl p-7 gap-6 max-h-[320px]">
            <h2 className="text-2xl ">Order resume</h2>
            <div className="grid grid-cols-2">
              <span>Nº Products </span>
              <span className="text-right">3 items</span>
              <span>Subtotal</span>
              <span className="text-right">$100</span>
              <span>Taxes - 15%</span>
              <span className="text-right">$20</span>
              <span className="text-2xl mt-8 font-medium">Total:</span>
              <span className="text-2xl text-right mt-8 font-medium">$120</span>
            </div>
            <div>
              <Link
                className="flex btn-primary justify-center w-full "
                href="/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
