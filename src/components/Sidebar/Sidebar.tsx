"use client";
import {
  faBook,
  faHome,
  faList,
  faTicket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { it } from "node:test";
import React, { useState } from "react";

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(true);

  const adminMenu: any = [
    {
      name: "Home",
      path: "/",
      icons: faHome,
    },
    {
      name: "Lotteries",
      path: "/portals/admin/lotteries",
      icons: faBook,
    },
    {
      name: "Users",
      path: "/portals/admin/users",
      icons: faUsers,
    },
    {
      name: "Tickets",
      path: "/portals/admin/tickets",
      icons: faTicket,
    },
    {
      name: "Reports",
      path: "/portals/admin/reports",
      icons: faList,
    },
  ];
  const userAdmin: any = [];

  const [menusToShow, setMenusToShow] = useState<any[]>(adminMenu);
  return (
    <div
      className="bg-primary h-screen p-5"
      style={{
        width: showMenu ? 250 : 80,
      }}
    >
      <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-col mt-20 gap-10">
        {menusToShow?.map((item, i) => (
          <div key={i} className="flex flex-col gap-7">
            <span>{item.icon}</span>
            <span className="text-gray-300 text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
