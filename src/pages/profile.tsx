import type { NextPage } from "next";

import { Flex } from "@/components";
import { TabView, HeroView } from "@/views/profile";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";

const MyProfile: NextPage = () => {
  const searchParams = useSearchParams();
  const domainName = searchParams.get("domain");
  const mode = searchParams.get("mode");
  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const { domainData } = useDomainDetails(domainName || "");

  useEffect(() => {
    if ((domainData as { domainName: string })?.domainName === "") {
      setDomainStatus(true);
    } else {
      setDomainStatus(false);
    }
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
