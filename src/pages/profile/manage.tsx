import type { NextPage } from "next";
import { TabView } from "@/views/dynamic-setting";
import { Container } from "@/components";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchDomainDetails } from "@/utils/web3/lookup";

const Setting: NextPage = () => {
  const searchParams = useSearchParams();
  const domainName = searchParams.get("domain");
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
    <Container>
      {!domainStatus ? (
        <>
          <TabView domainStatus={domainStatus} domainName={domainName || ""} />
        </>
      ) : (
        <p className="w-full text-main-300 h-[50vh] pt-[100px] inline-flex items-center justify-center text-[50px] uppercase">
          No profile
        </p>
      )}
    </Container>
  );
};

export default Setting;
