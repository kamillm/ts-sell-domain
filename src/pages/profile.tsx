import type { NextPage } from "next";

import { Flex } from "@/components";
import { TabView, HeroView } from "@/views/profile";

const Profile: NextPage = () => {
  return (
    <Flex direction="flex-col">
      <HeroView />
      <TabView />
    </Flex>
  );
};

export default Profile;
