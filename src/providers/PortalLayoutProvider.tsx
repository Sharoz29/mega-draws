import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function PortalLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-10">
      <Sidebar />
      <div className="m-7 pr-5">{children}</div>
    </div>
  );
}
