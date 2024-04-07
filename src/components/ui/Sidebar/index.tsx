"use client";
import React from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { MenuItems } from "./MenuItems";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
          <div
            onClick={() => closeSideMenu()}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          ></div>
        </>
      )}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 max-w-[500px] w-full h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          { "translate-x-full": !isSideMenuOpen }
        )}
      >
        <IoCloseOutline
          size={40}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />
        <div className="flex flex-col gap-10 mt-10">
          <div className="relative ">
            <IoSearchOutline size={20} className="absolute top-2 left-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-rose-500"
            />
          </div>
          <MenuItems onCloseMenu={closeSideMenu} />
        </div>
      </nav>
    </div>
  );
};
