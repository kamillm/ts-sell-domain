import { GradientText } from "@/components";
import { GalleryCard } from "@/components/Card";
import { GALLERY_ITEMS } from "@/utils/constants";
import React from "react";

const GiftCardView: React.FC = () => {
  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3 small:text-center">
        <GradientText>gift cards</GradientText>
      </div>
      {GALLERY_ITEMS.length === 0 && (
        <p className="border border-main-200 mt-5 rounded-lg inline-flex justify-center items-center w-full py-[100px] text-[30px] text-main-200 font-700 text-center desktop:text-[22px] font-space_grotesk">
          {"You don't have gift cards"}
        </p>
      )}
      <div className="pt-5 grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
        {GALLERY_ITEMS.map((item, index) => (
          <GalleryCard {...item} key={`profile-gallery-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default GiftCardView;
