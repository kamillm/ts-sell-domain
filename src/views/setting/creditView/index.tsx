import { Flex, GradientText } from "@/components";
import React, { useState, useCallback } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

const ascii = (a: any) => a.charCodeAt(0);
const gtEq = (a: any, b: any) => a >= b;
const ltEq = (a: any, b: any) => a <= b;

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
      <Flex direction="flex-col" className="pt-5 space-y-4">
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
              <input
                placeholder="Enter amount to send"
                className="flex-1  placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
              />

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

        <Flex align="items-center" justifyContent="justify-between" className="pt-10">
          <p className="text-[16px] font-500 text-main-900">Your Credits balance </p>
          <p className="text-[16px] font-700">55 Credits</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default CreditView;
