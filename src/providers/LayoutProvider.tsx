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
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
