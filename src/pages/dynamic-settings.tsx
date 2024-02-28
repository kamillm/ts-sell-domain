import type { NextPage } from "next";
import { TabView } from "@/views/dynamic-setting";
import { Container } from "@/components";

const Setting: NextPage = () => {
  return (
    <Container>
      <TabView />
    </Container>
  );
};

export default Setting;
