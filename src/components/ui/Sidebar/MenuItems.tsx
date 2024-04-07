import { logout } from "@/actions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const USER_ITEMS = {
  links: [
    {
      title: "Profile",
      href: "/profile",
      icon: <IoPersonOutline size={30} />,
      action: () => {},
    },
    {
      title: "Orders",
      href: "/",
      icon: <IoTicketOutline size={30} />,
      action: () => {},
    },
  ],
  buttons: [
    {
      title: "Logout",
      icon: <IoLogOutOutline size={30} />,
      action: () => {
        logout();
      },
    },
  ],
};
const ADMIN_ITEMS = [
  { title: "Products", href: "/", icon: <IoShirtOutline size={30} /> },
  { title: "Orders", href: "/", icon: <IoTicketOutline size={30} /> },
  { title: "Users", href: "/", icon: <IoPeopleOutline size={30} /> },
];

const GUEST_ITEMS = [
  {
    title: "Login",
    href: "/auth/login",
    icon: <IoLogInOutline size={30} />,
    action: () => {},
  },
];

interface MenuItemsProps {
  onCloseMenu: () => void;
}

export const MenuItems = ({ onCloseMenu }: MenuItemsProps) => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === "admin";

  return (
    <>
      {status === "authenticated" ? (
        <>
          <div className="flex flex-col gap-4">
            {USER_ITEMS.links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                onClick={() => {
                  onCloseMenu();
                  item.action();
                }}
              >
                {item.icon}
                <span className="text-xl">{item.title}</span>
              </Link>
            ))}
            {USER_ITEMS.buttons.map((item) => (
              <button
                key={item.title}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                onClick={() => {
                  onCloseMenu();
                  item.action();
                }}
              >
                {item.icon}
                <span className="text-xl">{item.title}</span>
              </button>
            ))}
          </div>
          {isAdmin && (
            <>
              <div className="w-full h-[2px] bg-gray-200 my-3 rounded"></div>
              <div className="flex flex-col gap-4">
                {ADMIN_ITEMS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                    onClick={() => onCloseMenu()}
                  >
                    {item.icon}
                    <span className="text-xl">{item.title}</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex flex-col gap-4">
          {GUEST_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={() => {
                onCloseMenu();
                item.action();
              }}
            >
              {item.icon}
              <span className="text-xl">{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
