import React, { useEffect, useState } from "react";
import { GradientText } from "@/components";
import { FollowerItem } from "@/components/Item/FollowerItem";
import clsx from "clsx";
import { useContextFavorite } from "@/contexts/FavoriteProvider";

const FavoriteView = () => {
  const { favorite } = useContextFavorite();
  const [favoriteItems, setFavoriteItems] = useState<string[]>([]);

  useEffect(() => {
    let items = JSON.parse(favorite);
    setFavoriteItems(items);
  }, [favorite]);

  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3">
        <GradientText>favorites</GradientText>
      </div>

      <div
        className={clsx(
          "flex-col pt-5 space-y-4",
          "desktop:space-y-0 desktop:grid desktop:grid-cols-3 desktop:gap-4",
          "laptop:grid-cols-1"
        )}
      >
        {favoriteItems.length !== 0 &&
          favoriteItems.map((item: string, index: number) => (
            <FollowerItem name={item} index={index + 1} key={`follower-item-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default FavoriteView;
