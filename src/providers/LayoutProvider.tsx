"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Spinner from "@/components/Spinner/Spinner";
import TopBar from "@/components/TopBar/TopBar";
import { getCurrentUserFromDb } from "@/server-actions/megaDrawsUsers";
import usersGlobalStore, { UsersGlobalStoreType } from "@/store/usersStore";
import { message } from "antd";
import React, { useEffect, useState } from "react";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setLoggedInUserData, loggedInUserData }: UsersGlobalStoreType =
    usersGlobalStore() as UsersGlobalStoreType;
  const [loading, setLoading] = useState(true);

  const getLoggedInUser = async () => {
    try {
      setLoading(true);
      const response: any = await getCurrentUserFromDb();
      if (response.success) {
        setLoggedInUserData(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error: any) {
      message?.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loggedInUserData) {
      getLoggedInUser();
    }
  }, []);
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <TopBar />
      <Navbar />
      {loading && <Spinner height={100} isFullScreen />}
      {children}
      <Footer />
    </div>
  );
}
