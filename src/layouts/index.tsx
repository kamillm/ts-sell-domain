import React from "react";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
import { MenuProvider } from "@/contexts";

import type { ComponentProps } from "@/types";
import { Flex } from "@/components";

export default function Layout({ children }: ComponentProps) {
  return (
    <MenuProvider>
      <Flex className="space-y-[200px] desktop:space-y-[180px]  small:space-y-[150px]" direction="flex-col">
        <Header />
        {children}
        <Footer />
      </Flex>
      <Menu />
    </MenuProvider>
  );
}
