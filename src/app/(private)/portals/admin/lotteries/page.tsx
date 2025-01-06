import LinkButton from "@/components/LinkButton/LinkButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import React from "react";

export default function Lotteries() {
  return (
    <div style={{ width: "1300px" }}>
      <div className="flex flex-row justify-between items-center">
        <PageTitle title="Lotteries" />
        <LinkButton
          title="Create Lottery"
          path="/portals/admin/lotteries/create"
        />
      </div>
    </div>
  );
}
