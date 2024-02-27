import GalleryCard from "@/components/Card/GalleryCard";
import { GALLERY_ITEMS } from "@/utils/constants";
import React from "react";

const GalleryView = () => {
  return (
    <div className="grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
      {GALLERY_ITEMS.map((item, index) => (
        <GalleryCard {...item} key={`profile-gallery-${index}`} />
      ))}
    </div>
  );
};

export default GalleryView;
