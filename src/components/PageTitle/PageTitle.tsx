import React from "react";

export default function PageTitle({ title }: { title: string }) {
  return <h1 className="text-2xl text-primary font-bold">{title}</h1>;
}
