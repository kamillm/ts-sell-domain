import type { NextPage } from "next";

import { Flex } from "@/components";
import { TabView, HeroView } from "@/views/profile";
import { useEffect, useState } from "react";
import { fetchDomainDetails } from "@/utils/web3/lookup";
import { useSearchParams } from "next/navigation";

const MyProfile: NextPage = () => {
  const searchParams = useSearchParams();
  const domainName = searchParams.get("domain");
  const mode = searchParams.get("mode");
  const [domainStatus, setDomainStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const domainData = await fetchDomainDetails(domainName || "");
      if (domainData?.domainName === "") {
        setDomainStatus(true);
      } else {
        setDomainStatus(false);
      }
    };
    fetchData();
  }, [domainName]);

  return (
    <Flex direction="flex-col">
      {!domainStatus ? (
        <>
          <HeroView domainName={domainName || ""} mode={mode === "true"} />
          <TabView />
        </>
      ) : (
        <p className="text-main-300 h-[50vh] pt-[100px] inline-flex items-center justify-center text-[50px] uppercase">
          No profile
        </p>
      )}
    </Flex>
  );
};

export default MyProfile;
