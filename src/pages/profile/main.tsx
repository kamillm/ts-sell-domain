import type { NextPage } from "next";

import { Flex } from "@/components";
import { TabView, HeroView } from "@/views/profile";

const MyProfile: NextPage = () => {
  return (
    <Flex direction="flex-col">
      <HeroView />
      <TabView />
    </Flex>
  );
};

export default MyProfile;
