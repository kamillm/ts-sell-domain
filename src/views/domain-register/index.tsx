import React, { useEffect, useState } from "react";
import SearchSection from "./SearchSection";
import TradingSection from "./TradingSection";
import { Flex, GradientText } from "@/components";
import NotFound from "@/components/NotFound";

import { MdOutlineSearch } from "react-icons/md";
import { useRouter } from "next/router";
import { Autocomplete } from "@mui/material";
// import { fetchDomainDetails } from "@/utils/web3/lookup";
import { useSearchParams } from "next/navigation";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";

const DomainRegisterView: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("domain");
  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const [searchedDomain, setSearchedDomain] = useState<string>("");
  const { domainData } = useDomainDetails(searchedDomain || "");
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

  useEffect(() => {
    setSearchedDomain(search || "");
  }, [search]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setSearchedDomain(inputText);
  };

  const handleButtonClick = () => {
    router.push({
      pathname: `register`,
      query: { domain: searchedDomain }
    });
  };

  return (
    <Flex direction="flex-col" align="items-center" className="pt-[200px]">
      {search === "" ? (
        <NotFound label="There is no domains" />
      ) : (
        <>
          <div className="uppercase text-[60px] font-500 small:text-[36px] text-center">
            <GradientText>Register a domain</GradientText>
          </div>

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
                    className="w-full h-[55px] px-[25px] text-[16px] font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
                  />

                  <button
                    type="submit"
                    onClick={handleButtonClick}
                    className="absolute w-[190px] tablet:w-[180px] small:w-[55px] h-full right-0 bg-primary rounded-full inline-flex items-center justify-center"
                  >
                    <MdOutlineSearch className="text-black w-8 h-8" />
                  </button>
                </div>
              )}
            />
          </div>

          <Flex direction="flex-col" className="w-full pt-[47px] space-y-[80px] small:space-y-[50px]">
            <SearchSection search={search || ""} />
            <TradingSection />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default DomainRegisterView;
