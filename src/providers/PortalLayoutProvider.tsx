import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function PortalLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
