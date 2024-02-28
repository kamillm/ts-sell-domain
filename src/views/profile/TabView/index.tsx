import React, { useState } from "react";
import { Flex } from "@/components";
import { FollowerView, BadgeView, GalleryView } from "@/views/profile";
import { TAB_ITEMS } from "@/utils/constants";

import clsx from "clsx";

const TabItem = ({
  tabIndex,
  mapIndex,
  onClick,
  label,
  count
}: {
  tabIndex: number;
  mapIndex: number;
  onClick: any;
  label: string;
  count: number;
}) => {
  return (
    <Flex
      align="items-center"
      justifyContent="justify-center"
      action={() => onClick(mapIndex)}
      className={clsx(
        "space-x-4 p-[15px] w-1/3 cursor-pointer tablet:space-x-1",
        tabIndex === mapIndex ? "border-b-2 border-primary" : "border-b-2 border-main-400/30"
      )}
    >
      <p className="font-600 text-[20px] tablet:text-[16px] mobile:text-[12px]">{label}</p>
      <p className="px-2 rounded-3xl bg-gray-400 text-[16px] tablet:text-[14px] mobile:text-[12px] mobile:px-1">
        {count}
      </p>
    </Flex>
  );
};

const TabView: React.FC = () => {
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
        {tabIndex === 3 && <FollowerView />}
      </Flex>
    </div>
  );
};

export default TabView;
