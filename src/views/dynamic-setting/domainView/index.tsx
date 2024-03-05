import { Flex, GradientText } from "@/components";
import { ascii, gtEq, ltEq } from "@/utils/func";
import React, { useState } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

const DomainView: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const handleCount = (type: boolean) => {
    if (type) {
      if (count < 10) {
        setCount(Number(count) + 1);
      }
    } else {
      if (count > 0) {
        setCount(Number(count) - 1);
      }
    }
  };

  const __checkNumbers = React.useCallback(
    ({ target: { value: v } }: { target: { value: any } }) =>
      v && gtEq(ascii([...v].pop()), 48) && ltEq(ascii([...v].pop()), 57) ? setCount(v) : setCount(v.slice(0, -1)),
    [setCount]
  );

  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3 small:text-center">
        <GradientText>domain</GradientText>
      </div>
      <Flex direction="flex-col" className="pt-5 space-y-4  w-[578px] laptop:w-full">
        <Flex direction="flex-col" className="w-full space-y-[10px] pt-3">
          <p className="text-[16px] font-500 text-main-900 ">Renew your domain with 90% discount</p>
          <Flex className="space-x-5 small:flex-col small:space-x-0 small:space-y-5">
            <Flex className="flex-1 w-full space-x-5">
              <input
                placeholder="Enter amount of years"
                className="flex-1  placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
              />

              <Flex className="space-x-3" align="items-center">
                <button onClick={() => handleCount(false)}>
                  <LuMinusCircle className="w-[22px] h-[22px]" />
                </button>
                <input
                  placeholder="1"
                  value={count}
                  onChange={__checkNumbers}
                  className="placeholder:text-[14px] w-[75px] laptop:w-[50px] h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40 text-center"
                />
                <button onClick={() => handleCount(true)}>
                  <LuPlusCircle className="w-[22px] h-[22px]" />
                </button>
              </Flex>
            </Flex>

            <button className="w-[151px] laptop:w-[100px] laptop:px-0 small:w-full bg-verified text-[16px] font-500 px-[38px] py-[11px] rounded-xl text-black">
              Renew
            </button>
          </Flex>
        </Flex>

        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Sell your domain</p>
          <Flex className="space-x-5 small:space-x-3">
            <input
              placeholder="Sell your domain on NFT Marketpalce"
              className="flex-1  placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
            />
            <button className="w-[151px] laptop:w-[100px] laptop:px-0 bg-primary text-[16px] font-500 px-[38px] py-[11px] rounded-xl text-black ">
              Sell
            </button>
          </Flex>
        </Flex>

        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Transfer your domain</p>
          <Flex className="space-x-5 small:space-x-3">
            <input
              placeholder="Enter address to send your domain"
              className="flex-1 placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
            />
            <button className="w-[151px] laptop:w-[100px] laptop:px-0 bg-warning text-[16px] font-500 px-[38px] py-[11px] rounded-xl text-black ">
              Transfer
            </button>
          </Flex>
        </Flex>

        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900">Delete your domain</p>
          <Flex className="space-x-5 small:space-x-3">
            <input
              placeholder="Burn your domain "
              className="flex-1 placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
            />
            <button className="w-[151px] laptop:w-[100px] laptop:px-0 bg-danger text-[16px] font-500 px-[38px] py-[11px] rounded-xl ">
              Delete
            </button>
          </Flex>
        </Flex>

        <Flex
          align="items-center"
          className="pt-10 tablet:w-full space-x-10 mobile:flex-col mobile:space-x-0 mobile:space-y-3 mobile:items-start"
        >
          <p className="text-[16px] font-500 text-main-900">Expiration</p>
          <p className="text-[16px] font-700">2025-08-21T18:16:30+02:00</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default DomainView;
