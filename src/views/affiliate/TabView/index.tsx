import React, { useState } from "react";
import { Flex, GradientText } from "@/components";
import { AFFILIATE_ITEMS, AFFILIATE_TAB_LIST, AFFILIATE_ITEM_YOU } from "@/utils/constants";
import { TabItem } from "..";

import clsx from "clsx";
import HelpSection from "../HelpSection";

const TabView: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  return (
    <Flex direction="flex-col" className="pt-[200px] mobile:pt-[150px] space-y-[30px] px-20 laptop:px-0">
      <Flex direction="flex-col" justifyContent="justify-center" align="items-center">
        <div className="text-[64px] small:text-[44px] font-500 uppercase font-space_grotesk">
          <GradientText>Affiliate</GradientText>
        </div>

        <HelpSection />

        <div className="relative border border-white-200 bg-black-400 rounded-full w-full mt-[70px]">
          <input
            placeholder="https://app.znsconnect.io?ref=bond.zeta"
            className="w-full h-[55px] px-[45px] py-6 text-[16px] font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
          />

          <button
            type="submit"
            className="absolute w-[263px] tablet:w-[185px] small:w-[110px] h-full right-0 bg-primary rounded-full inline-flex items-center justify-center"
          >
            <span className="text-black text-[16px] font-500">
              Copy<span className="small:hidden"> Affiliate Link</span>
            </span>
          </button>
        </div>
      </Flex>
      <br />

      <Flex
        align="items-center"
        justifyContent="justify-between"
        className="py-3 px-5 space-x-2 cursor-pointer small:p-3 border-b border-main-200"
      >
        <Flex align="items-center" justifyContent="justify-between" className="w-full space-x-5">
          <p className="text-main-900 text-[16px] w-[5%]  mobile:w-[10%] text-center">{"#"}</p>
          <p className="text-main-900 text-[16px] w-[40%] mobile:w-[90%]">{"My Domain"}</p>
          <p className="text-main-900 text-[16px] w-[20%]  small:hidden">{"My Refferals"}</p>
          <p className="text-main-900 text-[16px] w-[35%] mobile:hidden text-end">{"Total Earn"}</p>
        </Flex>
      </Flex>
      <TabItem affilate_items={AFFILIATE_ITEM_YOU} />
      <br />
      <Flex
        justifyContent="justify-between"
        align="items-center"
        className="bg-black rounded-full px-14 tablet:px-7 small:px-5"
      >
        {AFFILIATE_TAB_LIST.map((item, mapIndex) => (
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

      <Flex
        align="items-center"
        justifyContent="justify-between"
        className="py-3 px-5 space-x-2 rounded-2xl cursor-pointer small:p-3 border border-main-200"
      >
        <Flex align="items-center" justifyContent="justify-between" className="w-full space-x-5">
          <p className="text-main-900 text-[16px] w-[5%]  mobile:w-[10%] text-center">{"#"}</p>
          <p className="text-main-900 text-[16px] w-[40%] mobile:w-[90%]">{"Domain Name"}</p>
          <p className="text-main-900 text-[16px] w-[20%]  small:hidden">{"Refferals"}</p>
          <p className="text-main-900 text-[16px] w-[35%] mobile:hidden text-end">
            <span className="tablet:hidden">{"Total Earn"}</span>
            <span className="hidden tablet:block">{"Earn"}</span>
          </p>
        </Flex>
      </Flex>
      {tabIndex === 1 && <TabItem affilate_items={AFFILIATE_ITEMS} />}
      {tabIndex === 2 && <TabItem affilate_items={AFFILIATE_ITEMS} />}
      {tabIndex === 3 && <TabItem affilate_items={AFFILIATE_ITEMS} />}
      {tabIndex === 4 && <TabItem affilate_items={AFFILIATE_ITEMS} />}
    </Flex>
  );
};

export default TabView;
