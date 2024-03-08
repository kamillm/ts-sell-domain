import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Container, Flex, Link } from "@/components";
import { MdCancel } from "react-icons/md";
import { MENU_ICON_LIST, MENU_LIST } from "@/utils/constants";
import { useConnect, useContextLocalStorage, useMenu } from "@/contexts";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Autocomplete } from "@mui/material";
import { MdOutlineSearch as Search } from "react-icons/md";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";
import { useQueryClient } from "@tanstack/react-query";

const Menu: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { showMenu, setShowMenu } = useMenu();
  const { isConnect, setConnect } = useConnect();
  const { localstorage } = useContextLocalStorage();
  const { isConnected, isDisconnected } = useAccount();
  const handleClose = () => setShowMenu(!showMenu);
  const { openConnectModal } = useConnectModal();
  const [AutocompleteOpen, setAutocompleteOpen] = useState<boolean>(true);
  const [searchedDomain, setSearchedDomain] = useState<string>("");
  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const timeoutId = useRef<undefined | ReturnType<typeof setTimeout>>(undefined);
  const { domainData, domainQuery } = useDomainDetails(searchedDomain);

  const options = [
    {
      label: searchedDomain,
      status: searchedDomain === "" ? "" : domainStatus
    }
  ];

  useEffect(() => {
    if ((domainData as { domainName: string })?.domainName === "") {
      setDomainStatus(true);
    } else {
      setDomainStatus(false);
    }
  }, [domainData]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    clearTimeout(timeoutId.current);
    setSearchedDomain(inputText);

    timeoutId.current = setTimeout(async () => {
      // const domainData = await fetchDomainDetails(inputText);
      queryClient.invalidateQueries({ queryKey: domainQuery });
    }, 500);
  };

  const handleButtonClick = () => {
    setAutocompleteOpen(false);
    router.push({
      pathname: "search",
      query: { domain: searchedDomain }
    });
  };

  useEffect(() => {
    if (isConnected) {
      setConnect(true);
    }
    if (isDisconnected) {
      setConnect(false);
    }
  }, [isConnected, isDisconnected]);

  return (
    <div
      className={`fixed h-full w-full py-10 transition-all duration-300 z-[500] left-0 top-0 bg-black/60 ${showMenu ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"}`}
    >
      <Container>
        <Flex direction="flex-col" justifyContent="justify-between" className="h-full">
          <Flex align="items-center" justifyContent="justify-between">
            <div className="relative border border-white-400 rounded-full w-[60%] mobile:w-[70%]">
              <Autocomplete
                open={searchedDomain !== "" && AutocompleteOpen}
                onBlur={() => setAutocompleteOpen(false)}
                onFocus={() => setAutocompleteOpen(true)}
                options={options}
                renderOption={(props, option) => {
                  return (
                    <Flex
                      key={option.label}
                      justifyContent="justify-between"
                      className="px-6 font-space_grotesk cursor-pointer hover:bg-gray-200/40"
                      action={() => handleButtonClick()}
                    >
                      <p className="text-5- font-600 text-main-300">{option.label}</p>
                      <p className={`text-4 font-500 ${!option.status ? "text-red-500" : "text-blue-500"}`}>
                        {option.status === "" ? "" : option.status ? "Available" : "Not Available"}
                      </p>
                    </Flex>
                  );
                }}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      {...params.inputProps}
                      value={searchedDomain}
                      onChange={handleInputChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleButtonClick();
                      }}
                      placeholder="Search domain names"
                      className="w-full h-10 pl-4 pr-10 py-[10px] text-[12px] font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 bg-primary rounded-full text-center w-10 h-10 inline-flex items-center justify-center"
                      onClick={handleButtonClick}
                    >
                      <Search className="text-black w-5 h-5" />
                    </button>
                  </div>
                )}
              />
            </div>
            <button onClick={handleClose}>
              <MdCancel className="w-[35px] h-[35px] mobile:w-[30px] mobile:h-[30px]" />
            </button>
          </Flex>

          <Flex direction="flex-col" className="space-y-5">
            {MENU_LIST.map((menu, index) => {
              return (
                <Link
                  key={`navbar_menu_${index}`}
                  href={menu.link}
                  onClick={handleClose}
                  className={`animated-border relative hover:text-primary/50 ${router.asPath === menu.link ? "text-primary text-[24px] mobile:text-[18px] font-700" : "text-[20px] mobile:text-[16px] font-400"} cursor-pointer`}
                >
                  {menu.name}
                </Link>
              );
            })}

            {!isConnect && (
              <span
                onClick={openConnectModal}
                className={`text-start hover:text-primary text-[20px] mobile:text-[16px] font-400 cursor-pointer`}
              >
                Connect
              </span>
            )}
          </Flex>
          <Flex className="relative space-x-5 w-fit">
            {MENU_ICON_LIST.map((menu, index) => (
              <Link key={`navbar_menu_icon_${index}`} href={menu.link} className="cursor-pointer">
                {<menu.icon className="w-10 h-10 mobile:w-8 mobile:h-8" />}
              </Link>
            ))}
            {JSON.parse(localstorage).length != 0 && (
              <span className="absolute right-0 bg-verified rounded-full h-[15px] w-[15px] inline-flex items-center justify-center text-[10px]">
                {JSON.parse(localstorage).length}
              </span>
            )}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Menu;
