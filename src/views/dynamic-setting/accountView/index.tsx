import React from "react";
import { Flex, GradientText, Image } from "@/components";
import { USER_SOCIAL_LINKS } from "@/utils/constants";
import { MdOutlineVerified } from "react-icons/md";

const AccountView: React.FC = () => {
  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3  small:text-center">
        <GradientText>socials</GradientText>
      </div>
      <Flex direction="flex-col" className="pt-5 space-y-4  w-[578px] laptop:w-full">
        {USER_SOCIAL_LINKS.map((item, index) => (
          <Flex align="items-center" className="relative space-x-5" key={`user-profile-link-${index}`}>
            <item.icon className={`w-10 h-10 tablet:w-8 tablet:h-8 cursor-pointer`} />
            <input
              placeholder={`Enter your ${item.label}`}
              className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
            />
            {item.isVerify ? (
              <Image
                src={"/img/verify_blue.png"}
                width={20}
                height={20}
                className="absolute w-6 h-6 right-5 tablet:w-5 tablet:h-5"
                alt="profile_verify_avatar"
              />
            ) : (
              <MdOutlineVerified className="absolute right-5 w-6 h-6 text-verified cursor-pointer" />
            )}
          </Flex>
        ))}

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
