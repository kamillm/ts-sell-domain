import React, { useState } from "react";

import clsx from "clsx";
import { Flex, GradientText, Image } from "@/components";
import { ProfileView, AccountView, DomainView } from "@/views/dynamic-setting";
// assets
import { PROFILE_SETTINGS } from "@/utils/constants";

const TabView: React.FC<{ domainName: string }> = ({ domainName }) => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <Flex direction="flex-col" className="pt-[200px] mobile:pt-[150px] space-y-16">
      <Flex justifyContent="justify-center">
        <div className="text-[64px] small:text-[44px] font-500 uppercase text-center">
          <GradientText>Manage Domain</GradientText>
        </div>
      </Flex>
      <Flex align="items-center" className="space-x-[30px] final:flex-col final:space-x-0 final:space-y-3">
        <div className="w-[160px] h-[160px] small:w-[100px] small:h-[100px]">
          <Image src="/img/zns-logo.png" width={160} height={160} alt="profile_avatar" className="w-full h-full" />
        </div>
        <Flex direction="flex-col" className="space-y-2 final:items-center">
          <p className="font-space_grotesk text-[32px] font-500">{domainName}</p>
          <p className="text-verified font-space_grotesk text-[16px] font-500">Primary</p>
        </Flex>
      </Flex>
      <Flex className="space-x-[77px] laptop:space-x-[30px] tablet:flex-col tablet:space-x-0 tablet:space-y-10">
        <Flex
          direction="flex-col"
          className="w-[233px] laptop:w-[180px] tablet:flex-row tablet:w-full tablet:justify-between"
        >
          {PROFILE_SETTINGS.map((item, mapIndex) => (
            <Flex
              key={`profile-settings-${mapIndex}`}
              align="items-center"
              justifyContent="justify-start"
              action={() => setTabIndex(mapIndex + 1)}
              className={clsx(
                "w-full space-x-[15px] px-[25px] py-[17px] rounded-2xl cursor-pointer",
                tabIndex === mapIndex + 1 ? "text-black bg-primary_gradient_text" : "text-main-400 hover:text-white",
                "tablet:justify-center tablet:px-0",
                "final:flex-col final:justify-center final:space-x-0 final:space-y-1"
              )}
            >
              <item.icon className="w-[20px] h-[20px]" />
              <p className="text-[16px] final:text-[12px] font-500 uppercase">{item.label}</p>
            </Flex>
          ))}
        </Flex>
        <div className="w-full flex-1">
          {tabIndex === 1 && <ProfileView />}
          {tabIndex === 2 && <AccountView />}
          {tabIndex === 3 && <DomainView />}
        </div>
      </Flex>
    </Flex>
  );
};

export default TabView;
