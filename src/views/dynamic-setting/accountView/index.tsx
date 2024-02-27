import { Flex, GradientText, Image } from "@/components";
import React from "react";

const AccountView: React.FC = () => {
  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3">
        <GradientText>accounts</GradientText>
      </div>
      <Flex direction="flex-col" className="pt-5 space-y-4">
        <Flex align="items-center" className="w-full space-x-[20px]">
          <div className="w-9 h-9">
            <Image src={"/img/settings/twitter.png"} width={32} height={32} alt="twitter" className="w-full h-full" />
          </div>
          <input
            placeholder="Enter your twitter link"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>

        <Flex align="items-center" className="w-full space-x-[20px]">
          <div className="w-9 h-9">
            <Image src={"/img/settings/telegram.png"} width={32} height={32} alt="twitter" className="w-full h-full" />
          </div>
          <input
            placeholder="Enter your telegram link"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex align="items-center" className="w-full space-x-[20px]">
          <div className="w-9 h-9">
            <Image src={"/img/settings/discord.png"} width={32} height={32} alt="twitter" className="w-full h-full" />
          </div>
          <input
            placeholder="Enter your discord link"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex align="items-center" className="w-full space-x-[20px]">
          <div className="w-9 h-9">
            <Image src={"/img/settings/linkedin.png"} width={32} height={32} alt="twitter" className="w-full h-full" />
          </div>
          <input
            placeholder="Enter your linkedin link"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>

        <Flex align="items-center" className="w-full space-x-[20px]">
          <div className="w-9 h-9">
            <Image src={"/img/settings/instagram.png"} width={32} height={32} alt="twitter" className="w-full h-full" />
          </div>
          <input
            placeholder="Enter your github link"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>

        <div className="pt-10  w-[141px] tablet:w-full">
          <button className="w-full bg-primary text-[16px] font-500 px-[38px] py-[11px] rounded-3xl text-black ">
            Update
          </button>
        </div>
      </Flex>
    </div>
  );
};

export default AccountView;
