import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const crYear = new Date().getFullYear();
  return (
    <div className="flex gap-2 w-full justify-center items-center text-xs py-5">
      <Link href="/about">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo{" "}
        </span>
        <span>| shop </span>
        <span>©️ {crYear}</span>
      </Link>
      <Link href="/about">Privacity Policy and Terms of Service</Link>
    </div>
  );
};
