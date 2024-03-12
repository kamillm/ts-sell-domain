import React, { useEffect, useState } from "react";
import { MintCard } from "@/components/Card";
import { MINT_ITEMS } from "@/utils/constants";
import TransactionLoading from "@/components/Loaders/TransactionLoading";

const BadgeView = () => {
  const [items, setItems] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const type1Items = MINT_ITEMS.filter((item) => item.type === 1);
    setItems(type1Items);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {isLoading && <TransactionLoading size={60} />}
      {!isLoading && (
        <>
          {items.length === 0 && (
            <p className="border border-main-200 rounded-lg inline-flex justify-center items-center w-full py-[100px] text-[30px] text-main-200 font-700 text-center desktop:text-[22px] font-space_grotesk">
              {"You don't have any badges"}
            </p>
          )}
          <div className="grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
            {items.length != 0 &&
              items.map((item: any, index: number) => <MintCard {...item} key={`profile-gallery-${index}`} />)}
          </div>
        </>
      )}
    </div>
  );
};

export default BadgeView;
