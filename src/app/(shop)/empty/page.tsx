import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-full flex-1">
      <IoCartOutline size={80} />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Your cart is empty</h1>
        <Link className="text-rose-500 text-2xl underline" href="/">
          Return to shop
        </Link>
      </div>
    </div>
  );
}
