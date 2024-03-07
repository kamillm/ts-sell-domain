import type { NextPage } from "next";
import { TabView } from "@/views/dynamic-setting";
import { Container } from "@/components";
import { useEffect, useState } from "react";
import { Page } from "@/components/Page";
import { useRouter } from "next/router";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";

const Setting: NextPage = () => {
  const router = useRouter();
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
    <Page name="settings">
      <Container>
        {!domainStatus ? (
          <>
            <TabView domainName={domain} />
          </>
        ) : (
          <p className="w-full text-main-300 h-[50vh] pt-[100px] inline-flex items-center justify-center text-[50px] uppercase">
            No profile
          </p>
        )}
      </Container>
    </Page>
  );
};

export default Setting;
