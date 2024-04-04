import { OrderSummary, ProductsInCart, Title } from "@/components";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function CartPage() {
  return (
    <div className="flex justify-center items-center px-10 md:px-0">
      <div className="flex flex-col w-full max-w-[1000px] gap-5 ">
        <Title title="Cart" className="my-7" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4  ">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline">
              Continue shopping
            </Link>
            <ProductsInCart />
          </div>
          <div className="flex flex-col bg-white rounded-xl shadow-xl p-7 gap-6 max-h-[320px] mb-4">
            <h2 className="text-2xl ">Order resume</h2>
            <OrderSummary />
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
