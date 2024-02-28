import React from "react";
import { CardProps } from "@/types/card";
import { Flex, Image } from "..";
import clsx from "clsx";

const MintCard: React.FC<CardProps> = ({ count, name, src, type }) => {
  return (
    <Flex
      direction="flex-col"
      align="items-center"
      justifyContent="justify-center"
      className="w-full h-[370px] small:w-[314px] mobile:w-[250px] mobile:h-[350px] rounded-xl space-y-5 pb-3 bg-black-200/40 overflow-hidden"
    >
      <Image src={src} alt={name} fill className="w-[100px] h-[100px] shrink-0 rounded-full" />
      <Flex direction="flex-col" align="items-center" className="font-space_grotesk space-y-5 px-[22px] pb-[10px]">
        <Flex direction="flex-col" className="space-y-1">
          <p className="text-[24px] text-primary font-700 font-space_grotesk text-center">{name} followers</p>
          <p className="text-[14px] text-center">Connected with {name} Followers</p>
        </Flex>
        <Flex className="text-[14px] font-400 space-x-3">
          <p className="text-primary">Total Minted : </p>
          <p>{count}</p>
        </Flex>
        <button
          className={clsx(
            type === 1 && "bg-primary text-black",
            type === 2 && "bg-error",
            type === 3 && "bg-verified",
            "w-full rounded-3xl p-2"
          )}
        >
          {type === 1 && "Mint"}
          {type === 2 && "Not Available"}
          {type === 3 && "Minted"}
        </button>
      </Flex>
    </Flex>
  );
};

export default MintCard;
