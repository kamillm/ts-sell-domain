import React, { useState } from "react";

import clsx from "clsx";
import { Flex, GradientText } from "@/components";
import { CreditView, FavoriteView } from "@/views/setting";
// assets
import { CREDIT_SETTINGS } from "@/utils/constants";

const TabView: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <Flex direction="flex-col" className="pt-[200px] mobile:pt-[150px] space-y-[97px]">
      <Flex justifyContent="justify-center">
        <div className="text-[64px] small:text-[44px] font-500 uppercase">
          <GradientText>settings</GradientText>
        </div>
      </Flex>
      <Flex justifyContent="justify-between" className="space-x-10 tablet:flex-col tablet:space-x-0 tablet:space-y-10">
        <Flex
          direction="flex-col"
          className="w-[233px] laptop:w-[180px] tablet:flex-row tablet:w-full tablet:justify-between"
        >
          {CREDIT_SETTINGS.map((item, mapIndex) => (
            <Flex
              key={`profile-settings-${mapIndex}`}
              align="items-center"
              justifyContent="justify-start"
              action={() => setTabIndex(mapIndex + 1)}
              className={clsx(
                "w-full space-x-[15px] px-[25px] py-[17px] rounded-2xl cursor-pointer tablet:justify-center tablet:px-0",
                tabIndex === mapIndex + 1 ? "text-black bg-primary_gradient_text" : "text-main-400 hover:text-white"
              )}
            >
              <item.icon className="w-[20px] h-[20px]" />
              <p className="text-[16px] font-500 uppercase">{item.label}</p>
            </Flex>
          ))}
        </Flex>
        <div className="w-full flex-1">
          {tabIndex === 1 && <CreditView />}
          {tabIndex === 2 && <FavoriteView />}
        </div>
      </Flex>
    </Flex>
  );
};

export default TabView;
