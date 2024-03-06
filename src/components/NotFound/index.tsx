import React, { useEffect, useRef, useState } from "react";
import { Flex } from "..";
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Autocomplete } from "@mui/material";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";
import { useQueryClient } from "@tanstack/react-query";

const NotFound: React.FC<{ label: string }> = ({ label }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const search = searchParams.get("domain");
  const timeoutId = useRef<undefined | ReturnType<typeof setTimeout>>(undefined);
  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const [searchedDomain, setSearchedDomain] = useState<string>("");
  const { domainData, domainQuery } = useDomainDetails(searchedDomain);

  const options = [
    {
      label: searchedDomain,
      status: searchedDomain === "" ? "" : domainStatus
    }
  ];

  useEffect(() => {
    setSearchedDomain(search || "");
  }, [search]);

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
    router.push({
      pathname: "search",
      query: { domain: searchedDomain }
    });
  };

  return (
    <Flex direction="flex-col" className="space-y-[44px] pt-[50px] w-full px-[300px] desktop:px-[200px] laptop:px-0">
      <Flex
        direction="flex-col"
        align="items-center"
        className="w-full py-[20px] small:px-[60px] bg-black/40 rounded-2xl border border-main-200"
      >
        <Flex
          align="items-center"
          className="text-[36px] small:text-[20px] font-500 space-x-[15px] tablet:justify-center"
        >
          <MdOutlineShoppingCart />
          <p className="uppercase font-space_grotesk">{label}</p>
        </Flex>
        <p className="text-primary text-[16px] font-400 text-center">{"Please choose your domain"}</p>
      </Flex>
      <div className="relative border border-white-200 bg-white rounded-xl w-full">
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
                className="w-full h-[55px]  p-6 text-[16px]  font-400 text-black placeholder:text-main-400 border-none outline-none bg-transparent"
              />

              <button
                type="submit"
                onClick={handleButtonClick}
                className="absolute w-[155px] small:w-[102px] h-full right-0 bg-primary rounded-xl inline-flex items-center justify-center"
              >
                <MdOutlineSearch className="text-black w-8 h-8" />
              </button>
            </div>
          )}
        />
      </div>
    </Flex>
  );
};

export default NotFound;
