import React, { useRef, useState } from "react";
import { Flex, GradientText } from "@/components";
import { DOMAIN_TAB_LIST } from "@/utils/constants";
import { SortbyName } from "..";

import clsx from "clsx";
import { MdOutlineSearch } from "react-icons/md";
import { Autocomplete } from "@mui/material";
import { fetchDomainDetails } from "@/utils/web3/lookup";
import { useRouter } from "next/router";

const TabView: React.FC = () => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState<number>(1);
  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const [searchedDomain, setSearchedDomain] = useState<string>("");
  const timeoutId = useRef<undefined | ReturnType<typeof setTimeout>>(undefined);
  const options = [
    {
      label: searchedDomain,
      status: searchedDomain === "" ? "" : domainStatus
    }
  ];

  const handleButtonClick = () => {
    router.push({
      pathname: "search",
      query: { domain: searchedDomain }
    });
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    clearTimeout(timeoutId.current);
    setSearchedDomain(inputText);

    timeoutId.current = setTimeout(async () => {
      const domainData = await fetchDomainDetails(inputText);

      if (domainData?.domainName === "") {
        setDomainStatus(true);
        console.log("Available");
      } else {
        setDomainStatus(false);
        console.log("Not Available");
      }
    }, 300);
  };

  return (
    <Flex direction="flex-col" className="pt-[200px] mobile:pt-[150px] space-y-[30px] px-20 laptop:px-0">
      <Flex direction="flex-col" justifyContent="justify-center" align="items-center">
        <div className="text-[64px] small:text-[44px] font-500 uppercase font-space_grotesk">
          <GradientText>My domains</GradientText>
        </div>
      </Flex>

      <Flex
        justifyContent="justify-between"
        align="items-center"
        className="bg-black rounded-full px-14 tablet:px-5 small:flex-col small:rounded-md"
      >
        {DOMAIN_TAB_LIST.map((item, mapIndex) => (
          <Flex
            key={`my-domain-${mapIndex}`}
            align="items-center"
            justifyContent="justify-center"
            action={() => setTabIndex(mapIndex + 1)}
            className={clsx(
              "w-full cursor-pointer py-3",
              tabIndex === mapIndex + 1
                ? "border-b-2 border-main-300 border-spacing-5"
                : "text-main-400 hover:text-white"
            )}
          >
            <p className="text-[16px] tablet:text-[15px] font-500">{item.label}</p>
          </Flex>
        ))}
      </Flex>
      <div className="relative border border-white-200 bg-black-400 rounded-full w-full mt-[70px]">
        <Autocomplete
          options={options}
          renderOption={(props, option) => {
            return (
              <Flex
                key={option.label}
                justifyContent="justify-between"
                className="p-2 px-6 font-space_grotesk cursor-pointer hover:bg-gray-200/40"
              >
                <p className="text-5- font-600 text-main-300">{option.label}</p>
                <p className={`text-4 font-500 ${!option.status ? "text-red-500" : "text-blue-500"}`}>
                  {option.status === "" ? "" : option.status ? "Available" : "Not Available"}
                  {/* {option.status ? "Available" : "Not Available"} */}
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
                placeholder="Search Domain Names"
                className="w-full h-[55px] px-[45px] py-6 text-[16px] font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
              />

              <button
                type="submit"
                onClick={handleButtonClick}
                className="absolute w-[197px] tablet:w-[180px] small:w-[110px] h-full right-0 bg-primary rounded-full inline-flex items-center justify-center"
              >
                <MdOutlineSearch className="text-black w-8 h-8" />
              </button>
            </div>
          )}
        />
      </div>

      <Flex
        align="items-center"
        justifyContent="justify-between"
        className="px-5 py-2 space-x-2 rounded-2xl cursor-pointer small:px-4 small:py-1 final:px-1 border border-main-200"
      >
        <Flex align="items-center" justifyContent="justify-between" className="w-full space-x-5 small:space-x-3">
          <Flex
            className="space-x-5 w-[400px] tablet:w-[60%] small:w-full"
            align="items-center"
            justifyContent="justify-start"
          >
            <p className="w-5 h-5 shrink-0 text-main-900 text-[16px]">#</p>
            <p className="text-main-900 text-[16px]">{"Domain Name"}</p>
          </Flex>
          <p className="text-main-900 text-[16px] w-[90px] tablet:hidden">{"Token ID"}</p>
          <p className="text-main-900 text-[16px] w-[90px] desktop:hidden">{"Registrant"}</p>
          <p className="text-main-900 text-[16px] w-[130px]  small:hidden">{"Expiration"}</p>
        </Flex>
      </Flex>
      {tabIndex === 1 && <SortbyName />}
      {tabIndex === 2 && <SortbyName />}
      {tabIndex === 3 && <SortbyName />}
      {tabIndex === 4 && <SortbyName />}
    </Flex>
  );
};

export default TabView;
