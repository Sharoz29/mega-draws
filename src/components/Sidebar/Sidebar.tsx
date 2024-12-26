"use client";
import {
  faBook,
  faHome,
  faList,
  faTicket,
  faUsers,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(true);
  const pathname = usePathname();

  const adminMenu: any = [
    {
      name: "Home",
      path: "/",
      icons: faHome,
      isActive: pathname === "/",
    },
    {
      name: "Lotteries",
      path: "/portals/admin/lotteries",
      icons: faBook,
      isActive: pathname === "/portals/admin/lotteries",
    },
    {
      name: "Users",
      path: "/portals/admin/users",
      icons: faUsers,
      isActive: pathname === "/portals/admin/users",
    },
    {
      name: "Tickets",
      path: "/portals/admin/tickets",
      icons: faTicket,
      isActive: pathname === "/portals/admin/tickets",
    },
    {
      name: "Reports",
      path: "/portals/admin/reports",
      icons: faList,
      isActive: pathname === "/portals/admin/reports",
    },
  ];
  const userAdmin: any = [];

  const [menusToShow, setMenusToShow] = useState<any[]>(adminMenu);

  useEffect(() => {
    setMenusToShow(adminMenu);
  }, [pathname]);
  return (
    <div
      className="bg-primary h-screen p-5 relative transition-all duration-500"
      style={{
        width: showMenu ? 250 : 80,
      }}
    >
      {showMenu && (
        <h1 className="text-white text-2xl font-bold text-center">Dashboard</h1>
      )}
      <div className="absolute -right-3 py-2 px-2 top-5 bg-primary text-white rounded-sm">
        <FontAwesomeIcon
          icon={showMenu ? faAngleLeft : faAngleRight}
          color="white"
          className="cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div
        className={classNames("flex flex-col mt-20 gap-10", {
          "items-center": !showMenu,
          "justify-center": !showMenu,
        })}
      >
        {menusToShow?.map((item, i) => (
          <div key={i} className="flex flex-col gap-7">
            <Link href={item.path} className="no-underline">
              <div
                className={classNames(
                  "flex flex-row gap-5 cursor-pointer px-5 py-3 rounded",
                  {
                    "bg-gray-700": item.isActive,
                  }
                )}
              >
                <FontAwesomeIcon icon={item.icons} color="gray" />
                {showMenu && (
                  <span className="text-gray-300 text-sm">{item.name}</span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
