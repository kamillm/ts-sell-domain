import { Flex, GradientText } from "@/components";
import { ascii, gtEq, ltEq } from "@/utils/func";
import React, { useState, useCallback } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

const CreditView: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const handleCount = (type: boolean) => {
    if (type) {
      if (count < 100) {
        setCount(Number(count) + 1);
      }
    } else {
      if (count > 0) {
        setCount(Number(count) - 1);
      }
    }
  };

  const useCheckNumbers = useCallback(
    ({ target: { value: v } }: { target: { value: any } }) =>
      v && gtEq(ascii([...v].pop()), 48) && ltEq(ascii([...v].pop()), 57) ? setCount(v) : setCount(v.slice(0, -1)),
    [setCount]
  );

  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3">
        <GradientText>credits</GradientText>
      </div>
      <Flex direction="flex-col" className="pt-5 space-y-4 w-[578px] laptop:w-full">
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Redeem your Gift Card</p>
          <Flex className="space-x-5 small:space-x-3">
            <input
              placeholder=" Enter gift card code"
              className="flex-1  placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
            />
            <button className="w-[151px] laptop:w-[100px] laptop:px-0 bg-verified text-[16px] font-500 px-[38px] py-[11px] rounded-xl text-black ">
              Redeem
            </button>
          </Flex>
        </Flex>

        <Flex direction="flex-col" className="w-full space-y-[10px] pt-3">
          <p className="text-[16px] font-500 text-main-900 ">Buy credits to your account</p>
          <Flex className="space-x-5 small:flex-col small:space-x-0 small:space-y-5">
            <Flex className="flex-1 w-full space-x-5">
              <input
                placeholder="Enter amount you want to buy"
                className="flex-1  placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
              />

              <Flex className="space-x-3" align="items-center">
                <button onClick={() => handleCount(false)}>
                  <LuMinusCircle className="w-[22px] h-[22px]" />
                </button>
                <input
                  placeholder="1"
                  value={count}
                  onChange={useCheckNumbers}
                  className="placeholder:text-[14px] w-[75px] laptop:w-[50px] h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40 text-center"
                />
                <button onClick={() => handleCount(true)}>
                  <LuPlusCircle className="w-[22px] h-[22px]" />
                </button>
              </Flex>
            </Flex>

            <button className="w-[151px] laptop:w-[100px] laptop:px-0 small:w-full bg-primary text-[16px] font-500 px-[38px] py-[11px] rounded-xl text-black">
              Buy
            </button>
          </Flex>
        </Flex>

        <Flex direction="flex-col" className="w-full space-y-[10px] pt-3">
          <p className="text-[16px] font-500 text-main-900 ">Send credits </p>
          <Flex className="space-x-5 small:flex-col small:space-x-0 small:space-y-5">
            <Flex className="flex-1 w-full space-x-5">
              <div className="relative">
                <input
                  placeholder="Enter amount to send"
                  className="flex-1  placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
                />
                <p className="text-main-300 absolute right-3 top-4 text-[14px] cursor-pointer">Max</p>
              </div>

              <input
                placeholder="Enter address to send credits "
                className="flex-1  placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
              />
            </Flex>

            <button className="w-[151px] laptop:w-[100px] laptop:px-0 small:w-full bg-warning text-[16px] font-500 px-[38px] py-[11px] rounded-xl text-black">
              Transfer
            </button>
          </Flex>
        </Flex>

        <Flex align="items-center" className="pt-10 space-x-5">
          <p className="text-[16px] font-500 text-main-900">Redeem your Gift Card</p>
          <p className="text-[10px] rounded-full  text-black py-1 px-2 font-500 bg-[#65C8DE]">55 Credits</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default CreditView;
