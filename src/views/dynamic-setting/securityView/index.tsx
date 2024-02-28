import { Flex, GradientText } from "@/components";
import React from "react";

const SecurityView: React.FC = () => {
  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3">
        <GradientText>Security</GradientText>
      </div>
      <Flex direction="flex-col" className="pt-5 space-y-4">
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Email</p>
          <input
            placeholder="Enter your email"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Verification code</p>
          <input
            placeholder="Enter your verfication code"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>

        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Confirm password</p>
          <input
            type="password"
            placeholder="Enter your password again"
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

export default SecurityView;
