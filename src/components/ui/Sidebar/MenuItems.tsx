import Link from "next/link";
import React from "react";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const MENU_ITEMS_1 = [
  { title: "Profile", href: "/", icon: <IoPersonOutline size={30} /> },
  { title: "Orders", href: "/", icon: <IoTicketOutline size={30} /> },
  { title: "Login", href: "/", icon: <IoLogInOutline size={30} /> },
  { title: "Logout", href: "/", icon: <IoLogOutOutline size={30} /> },
];
const MENU_ITEMS_2 = [
  { title: "Products", href: "/", icon: <IoShirtOutline size={30} /> },
  { title: "Orders", href: "/", icon: <IoTicketOutline size={30} /> },
  { title: "Users", href: "/", icon: <IoPeopleOutline size={30} /> },
];

export const MenuItems = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {MENU_ITEMS_1.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
          >
            {item.icon}
            <span className="text-xl">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="w-full h-[2px] bg-gray-200 my-3 rounded"></div>
      <div className="flex flex-col gap-4">
        {MENU_ITEMS_2.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
          >
            {item.icon}
            <span className="text-xl">{item.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};
