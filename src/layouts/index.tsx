import React, { useEffect } from "react";
import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";

import { MenuProvider, ConnectProvider, HambugerProvider, CreditProvider, useContextLocalStorage } from "@/contexts";
import type { ComponentProps } from "@/types";

export default function Layout({ children }: ComponentProps) {
  const { setLocalStorage } = useContextLocalStorage();

  useEffect(() => {
    const saveItems = localStorage.getItem("domains") || "[]";

    setLocalStorage(saveItems);
  }, []);

  return (
    <ConnectProvider>
      <CreditProvider>
        <MenuProvider>
          <HambugerProvider>
            <Header />
            {children}
            <Footer />
            <Menu />
          </HambugerProvider>
        </MenuProvider>
      </CreditProvider>
    </ConnectProvider>
  );
}
