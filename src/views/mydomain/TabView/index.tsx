import React, { useState, useEffect } from "react";
import { Flex, GradientText } from "@/components";
import { DOMAIN_TAB_LIST } from "@/utils/constants";
import { SortbyName } from "..";

import clsx from "clsx";
import { MdOutlineSearch } from "react-icons/md";

const TabView: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  const [searchedDomain, setSearchedDomain] = useState<string>("");
  const [AutocompleteOpen, setAutocompleteOpen] = useState<boolean>(true);
  const { domainData, domainQuery } = useDomainDetails(searchedDomain);
  const timeoutId = useRef<undefined | ReturnType<typeof setTimeout>>(undefined);
  const options = [
    {
      label: searchedDomain,
      status: searchedDomain === "" ? "" : domainStatus
    }
  ];

  const handleButtonClick = () => {
    setAutocompleteOpen(false);
    router.push({
      pathname: "search",
      query: { domain: searchedDomain }
    });
  };

  useEffect(() => {
    if ((domainData as { domainName: string })?.domainName === "") {
      setDomainStatus(true);
    } else {
      setDomainStatus(false);
    }
  }, [domainData]);


  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedDomain(e.target.value);
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
              "w-full cursor-pointer py-3 border-b-2 ",
              tabIndex === mapIndex + 1
                ? "border-main-300 border-spacing-5"
                : "border-transparent text-main-400 hover:text-white"
            )}
          >
            <p className="text-[16px] tablet:text-[15px] font-500">{item.label}</p>
          </Flex>
        ))}
      </Flex>
      <div className="relative border border-white-200 bg-black-400 rounded-full w-full mt-[70px]">
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
                className="p-2 px-6 font-space_grotesk cursor-pointer hover:bg-gray-200/40"
                action={() => handleButtonClick()}
              >
                <p className="text-5- font-600 text-main-300">{option.label}</p>
                <p className={`text-4 font-500 ${!option.status ? "text-red-500" : "text-blue-500"}`}>
                  {option.status === "" ? "" : option.status ? "Available" : "Not Available"}
                  {/* {option.status ? "Available" : "Not Available"} */}
                </p>
              </Flex>
            );
        <input
          value={searchedDomain}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleButtonClick();
          }}
          placeholder="Search from my domains"
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

      <Flex
        align="items-center"
        justifyContent="justify-between"
        className="px-5 py-2 space-x-2 rounded-2xl cursor-pointer small:px-4 small:py-1 final:px-1 border border-main-200"
      >
        <Flex align="items-center" justifyContent="justify-between" className="w-full space-x-3  pr-[50px]">
          <Flex
            className="space-x-5 w-[60%] tablet:w-[80%] small:w-full"
            align="items-center"
            justifyContent="justify-start"
          >
            <p className="w-5 h-5 shrink-0 text-main-900 text-[16px]">#</p>
            <p className="text-main-900 text-[16px]">{"Domain Name"}</p>
          </Flex>
          <p className="text-main-900 text-[16px] w-[90px] tablet:hidden text-center">{"Token ID"}</p>
          <p className="text-main-900 text-[16px] w-[90px] desktop:hidden text-center">{"Registrant"}</p>
          <p className="text-main-900 text-[16px] w-[130px]  small:hidden text-center">{"Expiration"}</p>
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
