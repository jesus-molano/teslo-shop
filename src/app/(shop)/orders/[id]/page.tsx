import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface OrderByIdPageProps {
  params: {
    id: string;
  };
}

export default function OrderByIdPage({ params }: OrderByIdPageProps) {
  const { id } = params;
  // TODO verify id
  return (
    <div className="flex justify-center items-center px-10 md:px-0">
      <div className="flex flex-col w-full max-w-[1000px] gap-5 ">
        <Title title={`Order nº ${id}`} className="my-7" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4  ">
            <div
              className={clsx(
                "flex items-center gap-2 rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span>Payment pending</span>
            </div>
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
                  <QuantitySelector quantity={0} disabled />
                  <p className="font-bold">
                    Subtotal: <span>${product.price * 3}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col bg-white rounded-xl shadow-xl p-7 gap-6 mb-4">
            <h2 className="text-2xl font-bold">Delivery address</h2>
            <div>
              <p className="text-xl">John Doe</p>
              <p>226 Greene St</p>
              <p></p>
              <p>New York</p>
              <p>NY 10003</p>
              <p>EEUU</p>
              <p>+12122263126</p>
            </div>
            <div className="rounded w-full h-0.5 bg-gray-200"></div>
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
            <div className="flex flex-col gap-2">
              <div
                className={clsx(
                  "flex items-center gap-2 rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-500": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                <span>Payment pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
