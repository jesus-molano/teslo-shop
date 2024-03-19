import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NotFound = () => {
  return (
    <div
      className="
        flex flex-col-reverse justify-center items-center align-middle h-[800px] w-full
        md:flex-row
      "
    >
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Ups! Something was wrong </p>
        <p className="font-light">
          <span>Return to </span>
          <Link href="/" className="font-medium transition-all hover:underline">
            Home
          </Link>
        </p>
      </div>
      <div className="px-5">
        <Image
          src={"/imgs/starman_750x750.png"}
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
