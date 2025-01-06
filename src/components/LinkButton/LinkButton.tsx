"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function LinkButton({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const router = useRouter();
  return <Button onClick={() => router.push(path)}>{title}</Button>;
}
