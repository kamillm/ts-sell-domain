import type { NextPage } from "next";

import {
  HeroView,
  IdentifyView,
  BadgesView,
  MultiChainView,
  HowItWorksView,
  PersonalizedView,
  UtilityView
} from "@/views/home";
import { Flex } from "@/components";

const Home: NextPage = () => {
  return (
    <Flex className="space-y-[200px] desktop:space-y-[180px] small:space-y-[150px]" direction="flex-col">
      <HeroView />
      <IdentifyView />
      <BadgesView />
      <MultiChainView />
      <HowItWorksView />
      <PersonalizedView />
      <UtilityView />
    </Flex>
  );
};

export default Home;
