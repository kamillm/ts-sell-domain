import React, { useEffect, useState } from "react";
import { MintCard } from "@/components/Card";
import { MINT_ITEMS } from "@/utils/constants";

const BadgeView = () => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const type1Items = MINT_ITEMS.filter((item) => item.type === 1);
    setItems(type1Items);
  }, []);

  return (
    <div className="grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
      {items.length != 0 &&
        items.map((item: any, index: number) => <MintCard {...item} key={`profile-gallery-${index}`} />)}
    </div>
  );
};

export default BadgeView;
