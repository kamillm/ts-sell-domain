import React, { useEffect, useRef, useState } from "react";
import { useConnect, useCredit } from "@/contexts";
import { Flex, GradientText } from "@/components";
import { HAMBUGER_MENU } from "@/utils/constants";
import { useRouter } from "next/router";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { IoExitOutline as Exit } from "react-icons/io5";
import { BsCopy as Copy } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
// TODO: Add CSS for wallet operations
import NetworkBtn from "@/components/NetworkBtn/NetworkBtn";
import clsx from "clsx";
import { DOMAIN_ITEMS } from "@/utils/constants";

const ProfileMenu = ({
  showDropdown,
  wrapperRef,
  setShowDropdown
}: {
  showDropdown: boolean;
  wrapperRef: any;
  setShowDropdown: any;
}) => {
  const router = useRouter();
  const { setConnect } = useConnect();
  const { creditValue } = useCredit();
  const modalRef = useRef<HTMLDivElement>(null);
  const [copyHover, setCopyHover] = useState<boolean>(false);
  const [exitHover, setExitHover] = useState<boolean>(false);

  // Account Details Reflection
  const { address, isConnected, isDisconnected } = useAccount();
  const { data } = useBalance({ address: address });
  const shortenedAddress = address ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : "";
  const balance = data?.formatted.slice(0, 5);
  const symbol = data?.symbol;
  const { disconnect } = useDisconnect();

  const onHover = (type: string, action: boolean) => {
    if (type === "copy") {
      setCopyHover(action);
    } else {
      setExitHover(action);
    }
  };

  useEffect(() => {
    if (isConnected) {
      setConnect(true);
    }
    if (isDisconnected) {
      setShowDropdown(false);
      setConnect(false);
    }
  }, [isConnected, isDisconnected]);

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Address Copied");
      },
      (err) => {
        console.error("Failed to copy:", err);
      }
    );
  };

  const onMenuItem = (menuitem: any) => {
    setShowDropdown(false);
    if (menuitem.isDynamic) {
      const itemWithIsPrimaryTrue = DOMAIN_ITEMS.find((item) => item.isprimary === true);
      router.push({
        pathname: "/profile/[domain]",
        query: { domain: itemWithIsPrimaryTrue?.name, editmode: false, owner: true }
      });
    } else {
      router.push(menuitem.link);
    }
  };

  const onAddClick = () => {
    setShowDropdown(false);
    router.push("/settings?tab=credits");
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative transition-all duration-300 ${showDropdown ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"}`}
    >
      <div className="absolute right-0 w-[365px] z-[500] mobile:w-[290px]">
        <Flex direction="flex-col" className="bg-main-100 rounded-[30px] px-5 py-7 space-y-5">
          <Flex direction="flex-col" className="space-y-1">
            <Flex
              align="items-center"
              justifyContent="justify-between"
              className="text-[20px] font-500 font-space_grotesk space-x-3"
            >
              <GradientText>{shortenedAddress}</GradientText>
              <Flex align="items-center" className="space-x-3">
                <div className="relative p-2 border border-main-300 rounded-full  cursor-pointer">
                  <Copy
                    onClick={() => copyToClipboard(String(address))}
                    onMouseEnter={() => onHover("copy", true)}
                    onMouseLeave={() => onHover("copy", false)}
                    className="text-main-400 hover:text-primary w-4 h-4"
                  />
                  <span
                    className={clsx(
                      "absolute -right-[50%] -bottom-[40px] text-[12px] bg-black/40 border border-main-200 text-nowrap p-2 rounded-lg",
                      copyHover ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"
                    )}
                  >
                    Copy wallet address
                  </span>
                </div>

                <div className="relative p-2 border border-main-300 rounded-full  cursor-pointer">
                  <Exit
                    onClick={() => disconnect()}
                    onMouseEnter={() => onHover("exit", true)}
                    onMouseLeave={() => onHover("exit", false)}
                    className="text-main-400 hover:text-primary w-4 h-4"
                  />
                  <span
                    className={clsx(
                      "absolute -right-[50%] -bottom-[40px] text-[12px] bg-black/40 border border-main-200 text-nowrap p-2 rounded-lg",
                      exitHover ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"
                    )}
                  >
                    Disconnect Wallet
                  </span>
                </div>
              </Flex>
            </Flex>
            <Flex justifyContent="justify-between" className="text-[16px] font-400">
              <p>
                {balance} {symbol}
              </p>
            </Flex>
          </Flex>
          <Flex justifyContent="justify-between" className="text-[16px] font-500">
            <p>{creditValue} Credit</p>
            <p onClick={onAddClick} className="text-primary cursor-pointer hover:underline">
              Add
            </p>
          </Flex>
          {isConnected && <NetworkBtn />}
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
      <Toaster />
    </div>
  );
};

export default ProfileMenu;
