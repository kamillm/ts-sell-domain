import React, { useState } from "react";
import { Flex, GradientText } from "@/components";
import { BADGES_TAB_LIST } from "@/utils/constants";
import { AllViewTab } from "..";

import clsx from "clsx";

const TabView: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  return (
    <Flex direction="flex-col" className="pt-[200px] mobile:pt-[150px] space-y-[30px] px-20 laptop:px-0">
      <Flex direction="flex-col" justifyContent="justify-center" align="items-center" className="pb-10">
        <div className="text-[64px] small:text-[44px] font-500 uppercase font-space_grotesk">
          <GradientText>Badges</GradientText>
        </div>
        <p className="text-[16px] font-400 font-poppins text-center">Select your badges and mint them for free!</p>
      </Flex>
      <Flex
        justifyContent="justify-between"
        align="items-center"
        className="bg-black rounded-full px-14 tablet:px-7 small:px-2"
      >
        {BADGES_TAB_LIST.map((item, mapIndex) => (
          <Flex
            key={`my-domain-${mapIndex}`}
            align="items-center"
            justifyContent="justify-center"
            action={() => setTabIndex(mapIndex + 1)}
            className={clsx(
              "w-full cursor-pointer py-3",
              tabIndex === mapIndex + 1
                ? "border-b-2 border-main-300 border-spacing-5"
                : "text-main-400 hover:text-white"
            )}
          >
            <p className="text-[16px] small:text-[10px] font-500">{item.label}</p>
          </Flex>
        ))}
      </Flex>

      {tabIndex === 1 && <AllViewTab />}
      {tabIndex === 2 && <AllViewTab />}
      {tabIndex === 3 && <AllViewTab />}
      {tabIndex === 4 && <AllViewTab />}
    </Flex>
  );
};

export default TabView;
