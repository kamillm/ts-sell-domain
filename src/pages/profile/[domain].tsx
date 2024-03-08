import type { NextPage } from "next";

import { Flex } from "@/components";
import { TabView, HeroView } from "@/views/profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Page } from "@/components/Page";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";

const MyProfile: NextPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editmode = searchParams.get("editmode");
  const owner = searchParams.get("owner");
  const [domain, setDomain] = useState<string>("");
  const { domainData } = useDomainDetails(domain || "");
  const [domainStatus, setDomainStatus] = useState<boolean>(false);

  useEffect(() => {
    setDomain(Array.isArray(router.query.domain) ? router.query.domain[0] : router.query.domain || "");
  }, [router.query.domain]);

  useEffect(() => {
    if ((domainData as { domainName: string })?.domainName === "") {
      setDomainStatus(true);
    } else {
      setDomainStatus(false);
    }
  }, [domainData]);

  return (
    <Page name="profile">
      <Flex direction="flex-col">
        {!domainStatus ? (
          <>
            <HeroView domainName={domain} editmode={editmode === "true"} owner={owner === "true"} />
            <TabView />
          </>
        ) : (
          <p className="text-main-300 h-[50vh] pt-[100px] inline-flex items-center justify-center text-[50px] uppercase">
            No profile
          </p>
        )}
      </Flex>
    </Page>
  );
};

export default MyProfile;
