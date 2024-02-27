import React from "react";
import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";

import { MenuProvider, ConnectProvider, HambugerProvider } from "@/contexts";
import type { ComponentProps } from "@/types";

export default function Layout({ children }: ComponentProps) {
  return (
    <ConnectProvider>
      <MenuProvider>
        <HambugerProvider>
          <Header />
          {children}
          <Footer />
          <Menu />
        </HambugerProvider>
      </MenuProvider>
    </ConnectProvider>
  );
}
