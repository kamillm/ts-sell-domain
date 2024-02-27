import { Flex, GradientText } from "@/components";
import { CATEGORY_LIST } from "@/utils/constants";
import clsx from "clsx";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProfileView: React.FC = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [category, setCategory] = useState<number>(0);

  const handleCategory = (id: number) => {
    setCategory(id);
    setIsDrop(false);
  };

  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3">
        <GradientText>my profile</GradientText>
      </div>
      <Flex direction="flex-col" className="pt-5 space-y-4">
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Name</p>
          <input
            placeholder="Enter your name"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Short bio</p>
          <textarea
            placeholder="Enter a short brief about you"
            className="placeholder:text-[14px] w-full h-[135px] rounded-xl p-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Location</p>
          <input
            placeholder="Enter your location"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Web Site</p>
          <input
            placeholder="Paste link to your website"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
          />
        </Flex>
        <Flex direction="flex-col" className="w-full space-y-[10px] relative">
          <p className="text-[16px] font-500 text-main-900 ">Category</p>
          <Flex align="items-center" justifyContent="justify-between" className="relative w-full h-[54px] rounded-xl">
            <div
              onClick={() => setIsDrop(!isDrop)}
              className="bg-black/40 cursor-pointer text-[14px] w-full h-full rounded-xl px-4 text-white-500 border border-main-300 items-center inline-flex"
            >
              {category === 0 ? "Choose your category" : CATEGORY_LIST[category].label}
            </div>

            <button
              type="submit"
              className="absolute right-0 rounded-full text-center w-10 h-10 inline-flex items-center justify-center"
            >
              {isDrop ? <IoIosArrowDown className="w-5 h-5" /> : <IoIosArrowUp className="w-5 h-5" />}
            </button>
          </Flex>

          <Flex
            direction="flex-col"
            className={clsx(
              "duration-200 rounded-2xl overflow-clip absolute w-full top-[85px]",
              isDrop ? "visible opacity-100" : "invisible opacity-0"
            )}
          >
            {CATEGORY_LIST.map((item, index) => (
              <Flex
                action={() => handleCategory(item.id)}
                align="items-center"
                key={`category_list_${index}`}
                className="z-10 p-5 bg-black border-main-200 border-b-2 cursor-pointer hover:text-primary"
              >
                <p className="text-[14px] font-500">{item.label}</p>
              </Flex>
            ))}
          </Flex>
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

export default ProfileView;
