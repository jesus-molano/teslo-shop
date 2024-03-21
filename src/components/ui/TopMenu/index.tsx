"use client";
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const CATEGORY_LINKS = [
  { title: "Men", href: "/category/men" },
  { title: "Women", href: "/category/women" },
  { title: "Kids", href: "/category/kid" },
];

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 py-2 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        {CATEGORY_LINKS.map((link) => (
          <Link
            key={link.title}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Link href={"/search"} className="p-2">
          <IoSearchOutline className="w-5 h-5 " />
        </Link>
        <Link href={"/cart"} className="p-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-rose-700 text-white">
              1
            </span>

            <IoCartOutline className="w-5 h-5 " />
          </div>
        </Link>
        <button
          onClick={() => openSideMenu()}
          className="p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
