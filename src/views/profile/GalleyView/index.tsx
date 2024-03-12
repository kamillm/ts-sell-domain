import GalleryCard from "@/components/Card/GalleryCard";
import TransactionLoading from "@/components/Loaders/TransactionLoading";
import { GALLERY_ITEMS } from "@/utils/constants";
import React, { useEffect, useState } from "react";

const GalleryView = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex items-center justify-center">
      {isLoading && <TransactionLoading size={60} />}
      {!isLoading && (
        <>
          {GALLERY_ITEMS.length === 0 && (
            <p className="border border-main-200 rounded-lg inline-flex justify-center items-center w-full py-[100px] text-[30px] text-main-200 font-700 text-center desktop:text-[22px] font-space_grotesk">
              {"You don't have any Gallery"}
            </p>
          )}
          <div className="grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
            {GALLERY_ITEMS.map((item, index) => (
              <GalleryCard {...item} key={`profile-gallery-${index}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryView;
