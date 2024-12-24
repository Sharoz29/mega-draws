import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/TopBar/TopBar";
import React from "react";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
