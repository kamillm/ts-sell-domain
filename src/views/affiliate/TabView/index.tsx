import React, { useState } from "react";
import { Flex, GradientText } from "@/components";
import { AFFILIATE_ITEMS, AFFILIATE_TAB_LIST, AFFILIATE_ITEM_YOU } from "@/utils/constants";
import { TabItem } from "..";
import clsx from "clsx";
import HelpSection from "../HelpSection";
import { BsCopy } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

const TabView: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  const [inputData, setInputData] = useState<string>("https://app.znsconnect.io?ref=bond.zeta");

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Affiliate Link Copied");
      },
      (err) => {
        console.error("Failed to copy:", err);
      }
    );
  };

  return (
    <Flex direction="flex-col" className="pt-[200px] mobile:pt-[150px] space-y-[30px] px-20 laptop:px-0">
      <Flex direction="flex-col" justifyContent="justify-center" align="items-center">
        <div className="text-[64px] small:text-[44px] font-500 uppercase font-space_grotesk">
          <GradientText>Affiliate</GradientText>
        </div>

        <HelpSection />

        <div className="relative border border-white-200 bg-black-400 rounded-full w-full mt-[70px]">
          <input
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="https://app.znsconnect.io?ref=bond.zeta"
            className="w-full h-[55px] px-[45px] mobile:px-[20px] py-6 text-[16px] mobile:text-[14px] font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
          />

          <button
            type="submit"
            onClick={() => copyToClipboard(String())}
            className="absolute w-[263px] tablet:w-[185px] small:w-[55px] h-full right-0 bg-primary rounded-full inline-flex items-center justify-center"
          >
            <span className="text-black text-[16px] font-500 small:hidden">Copy Affiliate Link</span>
            <BsCopy className="hidden small:w-5 small:h-5 small:block text-black" />
          </button>
        </div>
      </Flex>
      <br />

      <TabItem affilate_items={AFFILIATE_ITEM_YOU} isYou={true} />
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

      <TabItem affilate_items={AFFILIATE_ITEMS} isYou={false} />
      <Toaster />
    </Flex>
  );
};

export default TabView;
