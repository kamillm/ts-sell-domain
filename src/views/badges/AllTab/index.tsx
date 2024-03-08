import React from "react";
import { MintCard } from "@/components/Card";

const AllViewTab: React.FC<{ items: any }> = ({ items }) => {
  return (
    <div className="grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
      {items.length !== 0 &&
        items.map((item: any, index: number) => <MintCard {...item} key={`profile-gallery-${index}`} />)}
    </div>
  );
};

export default AllViewTab;
