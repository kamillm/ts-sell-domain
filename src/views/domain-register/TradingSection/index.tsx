import React from "react";
import { Flex } from "@/components";
import { FollowerItem } from "@/components/Item/FollowerItem";
import { FAVORITE_ITEMS } from "@/utils/constants";
import clsx from "clsx";

const TradingSection: React.FC = () => {
  return (
    <div className="w-full">
      <p className="text-[20px] font-400 capitalize">{"Trending Domains"}</p>

      <Flex className="space-x-[30px] pt-[30px] laptop:flex-col">
        <div
          className={clsx(
            "flex-col flex-1 space-y-4",
            "desktop:space-y-0 desktop:grid desktop:grid-cols-2 desktop:gap-4",
            "laptop:grid-cols-3",
            "tablet:grid-cols-2",
            "small:grid-cols-1"
          )}
        >
          {FAVORITE_ITEMS.map((item, index) => (
            <FollowerItem {...item} index={index + 1} key={`follower-item-${index}`} />
          ))}
        </div>

        <Flex direction="flex-col" className="w-[333px] space-y-[15px] laptop:hidden">
          <div className="border border-main-300  rounded-xl px-[28px] py-[30px]">
            {"Domain purchases entail a single payment and come with a 90% discount on renewal fees."}
          </div>
          <div className="border border-main-300  rounded-xl px-[28px] py-[30px]">
            {"Placing a domain in your cart doesn't block others from acquiring it"}
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default TradingSection;
