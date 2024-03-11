import React, { useState } from "react";
import { Flex } from "@/components";
import { FollowerView, BadgeView, GalleryView, FollowingView } from "@/views/profile";
import { FOLLOWER_ITEMS, GALLERY_ITEMS, MINT_ITEMS, TAB_ITEMS } from "@/utils/constants";

import clsx from "clsx";
import { Follower, useContextFollower } from "@/contexts";

const TabItem = ({
  tabIndex,
  mapIndex,
  onClick,
  label
}: {
  tabIndex: number;
  mapIndex: number;
  onClick: any;
  label: string;
}) => {
  const { follower } = useContextFollower();
  const onCountItems = (mapIndex: number) => {
    if (mapIndex === 1) {
      return GALLERY_ITEMS.length;
    } else if (mapIndex === 2) {
      return MINT_ITEMS.length;
    } else if (mapIndex === 3) {
      return FOLLOWER_ITEMS.length;
    } else {
      return follower.filter((item: Follower) => item.isfollow).length;
    }
  };

  return (
    <Flex
      align="items-center"
      justifyContent="justify-center"
      action={() => onClick(mapIndex)}
      className={clsx(
        "space-x-4 p-[15px] small:px-1  w-1/3 cursor-pointer tablet:space-x-1",
        tabIndex === mapIndex ? "border-b-2 border-primary" : "border-b-2 border-main-400/30"
      )}
    >
      <p className="font-600 text-[18px] tablet:text-[14px] mobile:text-[12px] relative">
        {mapIndex === 1 || mapIndex === 2 ? <span className="small:hidden">{"My "}</span> : ""}
        {label}

        <span className="absolute -top-3 px-2 rounded-3xl bg-gray-400 text-[16px] tablet:text-[12px] mobile:text-[10px] mobile:-right-[10px] mobile:px-1">
          {onCountItems(mapIndex)}
        </span>
      </p>
    </Flex>
  );
};

const TabView: React.FC<{ domain?: any; user?: any }> = (domain) => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <div className="max-w-[1440px] h-full w-full mx-auto px-16 desktop:px-12 tablet:px-8 tablet:py-20 mobile:px-0">
      <Flex
        direction="flex-col"
        className="space-y-[90px] px-[130px] laptop:px-0 tablet:px-[30px] tablet:space-y-[50px]"
      >
        <Flex justifyContent="justify-between">
          {TAB_ITEMS.map((item, index) => (
            <TabItem
              {...item}
              key={`profile-tab-${index}`}
              mapIndex={index + 1}
              tabIndex={tabIndex}
              onClick={setTabIndex}
            />
          ))}
        </Flex>

        {tabIndex === 1 && <GalleryView />}
        {tabIndex === 2 && <BadgeView />}
        {tabIndex === 3 && <FollowerView domain={domain.domain} />}
        {tabIndex === 4 && <FollowingView domain={domain.domain} />}
      </Flex>
    </div>
  );
};

export default TabView;
