import React from "react";
import { MintCard } from "@/components/Card";
import { MINT_ITEMS } from "@/utils/constants";

const BadgeView = () => {
  return (
    <div className="grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
      {MINT_ITEMS.map((item, index) => (
        <MintCard {...item} key={`profile-gallery-${index}`} />
      ))}
    </div>
  );
};

export default BadgeView;
