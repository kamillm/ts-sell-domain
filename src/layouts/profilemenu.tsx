import React, { useCallback, useEffect, useRef } from "react";

import { useConnect, useHambuger } from "@/contexts";
import { Flex, GradientText } from "@/components";
import { HAMBUGER_MENU } from "@/utils/constants";
import { useRouter } from "next/router";

const ProfileMenu: React.FC = () => {
  const router = useRouter();
  const { setConnect } = useConnect();
  const modalRef = useRef<HTMLDivElement>(null);
  const { isHambuger, setHambuger } = useHambuger();

  const handleClickOutside = useCallback(() => {
    setHambuger(false);
  }, [setHambuger]);

  const onMenuItem = (item: any) => {
    setHambuger(false);
    if (item.type) {
      setConnect(false);
    } else {
      router.push(item.link);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log(modalRef.current, event.target);
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClickOutside();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [modalRef, handleClickOutside]);

  return (
    <div
      ref={modalRef}
      className={`relative transition-all duration-300 ${isHambuger ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"}`}
    >
      <div className="absolute right-0 w-[365px] z-[500]">
        <Flex direction="flex-col" className="bg-main-100 rounded-[30px] px-5 py-7 space-y-8">
          <Flex direction="flex-col" className="space-y-1">
            <div className="text-[20px] font-500 font-space_grotesk">
              <GradientText>Oxd231....68A</GradientText>
            </div>
            <Flex justifyContent="justify-between" className="text-[16px] font-400">
              <p>12.56 MATIC</p>
              <p className="space_grotesk text-primary cursor-pointer">EDIT</p>
            </Flex>
          </Flex>
          <Flex direction="flex-col" className="space-y-[10px]">
            {HAMBUGER_MENU.map((item, index) => (
              <Flex
                key={`profile_menu_${index}`}
                align="items-center"
                className="p-5 bg-black/40 rounded-xl space-x-3 cursor-pointer hover:text-primary"
                action={() => onMenuItem(item)}
              >
                <item.icon className="w-5 h-5" />
                <p className="text-[14px] font-500">{item.label}</p>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default ProfileMenu;