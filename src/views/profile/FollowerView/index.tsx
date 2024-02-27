import React from "react";
import clsx from "clsx";
import { Flex, GradientText, Image } from "@/components";
// assets
import { FOLLOWER_ITEMS } from "@/utils/constants";
import { GoThumbsup } from "react-icons/go";

const FollowerItem = ({
  index,
  src,
  name,
  isfollow
}: {
  index: number;
  src: string;
  name: string;
  isfollow: boolean;
}) => {
  return (
    <Flex
      align="items-center"
      justifyContent="justify-between"
      className="px-5 py-2 space-x-2 bg-black/40 rounded-2xl cursor-pointer hover:bg-main-100 small:px-4 small:py-1 final:px-1"
    >
      <Flex align="items-center" className="w-[80%] space-x-5 small:space-x-3">
        <Flex justifyContent="justify-center" align="items-center" className="">
          <div className="w-5 h-5 rounded-full bg-main-200 text-main-900 text-[16px] inline-flex items-center justify-center">
            {index}
          </div>
        </Flex>
        <Flex align="items-center" className="space-x-4 mobile:space-x-2 truncate">
          <Image src={src} alt={name} fill className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full" />
          <p className="w-[80%] text-[22px] small:text-[16px] mobile:text-[12px] font-500 truncate">{name}</p>
        </Flex>
      </Flex>
      <button
        className={clsx(
          isfollow ? "bg-primary text-black" : "bg-main-200 text-main-900",
          "rounded-3xl inline-flex items-center justify-center p-3",
          "w-[113px] small:w-[52px]",

          "small:hidden"
        )}
      >
        <span className="text-[12px]">{isfollow ? "Follow" : "Followed"}</span>
      </button>
      <div className="bg-primary p-2 rounded-full text-black hidden small:block">
        <GoThumbsup className="hidden small:block w-5 h-5 small:rounded-full" />
      </div>
    </Flex>
  );
};

const FollowerView: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-[32px] font-500 font-space_grotesk mobile:text-[28px]">
        <GradientText>Followers</GradientText>
      </div>

      <Flex direction="flex-col" className="space-y-3">
        {FOLLOWER_ITEMS.map((item, index) => (
          <FollowerItem key={`follower-item-${index}`} index={index + 1} {...item} />
        ))}
      </Flex>
    </div>
  );
};

export default FollowerView;
