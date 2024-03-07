import React, { useEffect } from "react";
import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";

import { MenuProvider, ConnectProvider, CreditProvider, useContextLocalStorage } from "@/contexts";
import type { ComponentProps } from "@/types";
import { useContextFavorite } from "@/contexts/FavoriteProvider";

export default function Layout({ children }: ComponentProps) {
  const { setLocalStorage } = useContextLocalStorage();
  const { setFavorite } = useContextFavorite();

  useEffect(() => {
    const saveItems = localStorage.getItem("domains") || "[]";
    const favoriteItems = localStorage.getItem("favorite") || "[]";

    setLocalStorage(saveItems);
    setFavorite(favoriteItems);
  }, []);

  return (
    <ConnectProvider>
      <CreditProvider>
        <MenuProvider>
          <Header />
          {children}
          <Footer />
          <Menu />
        </MenuProvider>
      </CreditProvider>
    </ConnectProvider>
  );
}
