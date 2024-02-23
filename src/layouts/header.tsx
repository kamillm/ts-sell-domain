import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Flex, Image, Link } from "@/components";
import { MENU_ICON_LIST, MENU_LIST } from "@/utils/constants";
import { Container } from "@/components";
import { useMenu } from "@/contexts";
// icons
import { MdOutlineSearch as Search, MdOutlineMenu as Menu } from "react-icons/md";

export default function Header() {
  const router = useRouter();
  const { setShowMenu, showMenu } = useMenu();
  const [unScrolled, setUnScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setUnScrolled(document.documentElement.scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full ${unScrolled ? "" : "bg-transparent backdrop-blur-xl"} ${!showMenu ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <Container>
        <Flex align="items-center" justifyContent="justify-between" className="py-5">
          <Link href="/" className="cursor-pointer">
            <Image src="/img/zns-logo.png" alt="ZNS Connect logo" width={59} height={59} />
          </Link>
          <Flex align="items-center" className="space-x-7 desktop:space-x-4 laptop:hidden">
            {MENU_LIST.map((menu, index) => (
              <Link
                key={`navbar_menu_${index}`}
                href={menu.link}
                className={`${router.asPath === menu.link ? "text-primary text-[14px] font-700" : "text-[12px] font-400"} cursor-pointer`}
              >
                {menu.name}
              </Link>
            ))}
          </Flex>
          <Flex align="items-center" justifyContent="justify-between" className="space-x-4">
            <div className="relative border border-white-200 bg-black-400 rounded-full mobile:hidden">
              <input
                placeholder="Search"
                className="max-w-[238px] w-[238px] desktop:w-full h-[38px] px-4 py-[10px] text-[12px] font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
              />

              <button type="submit" className="absolute right-0 bg-primary p-2 rounded-full text-center">
                <Search className="text-black w-5 h-5" />
              </button>
            </div>
            <Flex className="space-x-7 desktop:space-x-3 small:hidden">
              {MENU_ICON_LIST.map((menu, index) => (
                <Link key={`navbar_menu_icon_${index}`} href={menu.link} className="cursor-pointer">
                  {<menu.icon className="w-6 h-6" />}
                </Link>
              ))}
            </Flex>
            <button className="hidden laptop:block" onClick={() => setShowMenu(true)}>
              <Menu className="w-[24px] h-[24px]" />
            </button>
            <button className="w-[141px] h-10 text-black bg-primary rounded-full laptop:hidden">Connect</button>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
