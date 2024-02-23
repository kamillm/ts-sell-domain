import React from "react";
import { useMenu } from "@/contexts";
import { Container, Flex, Link } from "@/components";
import { MdOutlineSearch, MdCancel } from "react-icons/md";
import { MENU_ICON_LIST, MENU_LIST } from "@/utils/constants";
import { useRouter } from "next/router";

const Menu: React.FC = () => {
  const router = useRouter();
  const { showMenu, setShowMenu } = useMenu();

  const handleClose = () => setShowMenu(!showMenu);

  return (
    <div
      className={`fixed h-full w-full py-10 transition-all duration-300 z-[500] left-0 top-0 bg-black/60 ${showMenu ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"}`}
    >
      <Container>
        <Flex direction="flex-col" justifyContent="justify-between" className="h-full">
          <Flex align="items-center" justifyContent="justify-between">
            <div className="relative border border-white-400 rounded-full w-[60%] mobile:w-[70%]">
              <input
                placeholder="Search"
                className="w-full h-10 pl-4 pr-10 py-[10px] text-[12px] font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
              />

              <button
                type="submit"
                className="absolute right-0 bg-primary rounded-full text-center w-10 h-10 inline-flex items-center justify-center"
              >
                <MdOutlineSearch className="text-black w-5 h-5" />
              </button>
            </div>

            <button onClick={handleClose}>
              <MdCancel className="w-[35px] h-[35px] mobile:w-[30px] mobile:h-[30px]" />
            </button>
          </Flex>

          <Flex direction="flex-col" className="space-y-5">
            {MENU_LIST.map((menu, index) => (
              <Link
                key={`navbar_menu_${index}`}
                href={menu.link}
                onClick={handleClose}
                className={`animated-border relative hover:text-primary/50 ${router.asPath === menu.link ? "text-primary text-[24px] mobile:text-[18px] font-700" : "text-[20px] mobile:text-[16px] font-400"} cursor-pointer`}
              >
                {menu.name}
              </Link>
            ))}
            <Link
              href="#"
              className={`animated-border hover:text-primary/50 text-[20px] mobile:text-[18px]  font-400" cursor-pointer`}
            >
              Connect
            </Link>
          </Flex>
          <Flex className="space-x-5">
            {MENU_ICON_LIST.map((menu, index) => (
              <Link key={`navbar_menu_icon_${index}`} href={menu.link} className="cursor-pointer">
                {<menu.icon className="w-10 h-10 mobile:w-8 mobile:h-8" />}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Menu;
