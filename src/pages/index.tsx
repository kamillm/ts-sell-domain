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

const Home: NextPage = () => {
  return (
    <>
      <HeroView />
      <IdentifyView />
      <BadgesView />
      <MultiChainView />
      <HowItWorksView />
      <PersonalizedView />
      <UtilityView />
    </>
  );
};

export default Home;
