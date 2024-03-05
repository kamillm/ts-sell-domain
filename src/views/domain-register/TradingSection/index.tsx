import React, { useState } from "react";
import { Flex } from "@/components";
import { FollowerItem } from "@/components/Item/FollowerItem";
import { FAVORITE_ITEMS } from "@/utils/constants";
import { AddCartModal } from "@/components/Modal";

const TradingSection: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="w-full">
      <p className="text-[20px] font-400 capitalize">{"Trending Domains"}</p>

      <Flex className="space-x-[30px] pt-[30px] laptop:flex-col">
        <Flex direction="flex-col" className="flex-1 space-y-[24px]">
          {FAVORITE_ITEMS.map((item, index) => (
            <FollowerItem
              {...item}
              index={index + 1}
              key={`follower-item-${index}`}
              setShowModal={setShowModal}
              setSelected={setSelected}
            />
          ))}
        </Flex>
        <Flex direction="flex-col" className="w-[333px] space-y-[15px] laptop:hidden">
          <div className="border border-main-300  rounded-xl px-[28px] py-[30px]">
            {"Domain purchases entail a single payment and come with a 90% discount on renewal fees."}
          </div>
          <div className="border border-main-300  rounded-xl px-[28px] py-[30px]">
            {"Placing a domain in your cart doesn't block others from acquiring it"}
          </div>
        </Flex>
      </Flex>

      <AddCartModal showModal={showModal} setShowModal={setShowModal} domain={selected} />
    </div>
  );
};

export default TradingSection;
