import type { NextPage } from "next";
import { TabView } from "@/views/dynamic-setting";
import { Container } from "@/components";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Page } from "@/components/Page";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import NotFound from "@/components/NotFound";
// import { useDomainDetails } from "@/utils/web3/useDomainDetails";

const Setting: NextPage = () => {
  const router = useRouter();
  // const slug = router.query.domain;
  const searchParams = useSearchParams();
  const editmode = searchParams.get("editmode");
  const owner = searchParams.get("owner");

  const [domain, setDomain] = useState<string | string[] | undefined>(router.query.domain);
  const [domainStatus, setDomainStatus] = useState<"true" | "loading" | "false" | "error">("false");

  const [userDataReceived, setUserDataReceived] = useState<boolean>(false);
  const [domainDataReceived, setDomainDataReceived] = useState<boolean>(false);

  const [userDetails, setUserDetails] = useState<any>({});
  const [domainDetails, setDomainDetails] = useState<any>({});

  let walletAddress = "dummy_wallet";
  let chain = "ZETA";

  const getDomaindetails = async (domainName: string | string[] | undefined, walletAddress: string, chain: string) => {
    if (walletAddress != "" && chain != "" && domainName != "") {
      try {
        setDomainDataReceived(false);
        const domainRequestBody = {
          domainName,
          walletAddress,
          chain
        };

        const response = await fetch("/api/domain/fetch/fetchDomain", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(domainRequestBody)
        });

        if (response.ok) {
          const data = await response.json();
          // console.log("Fetched domain data:", data);
          // Handle your fetched domain data here
          setDomainDataReceived(true);
          setDomainDetails(data.data);
          return data.data;
        } else {
          console.error("Failed to fetch domain:", response.statusText);
          setDomainStatus("false");
        }
      } catch (error) {
        console.error("Error fetching domain:", error);
        setDomainStatus("false");
      }
    }
  };

  const getUserDetails = async (walletAddress: string, chainName: string) => {
    if (walletAddress != "" && chainName != "") {
      try {
        setUserDataReceived(false);
        const userRequestBody = {
          walletAddress,
          chainName
        };

        const response = await fetch("/api/user/fetch/fetchUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userRequestBody)
        });

        if (response.ok) {
          const data = await response.json();
          setUserDataReceived(true);
          setUserDetails(data.data);
          return data.data;
        } else {
          console.error("Failed to fetch user:", response.statusText);

          setDomainStatus("false");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Error fetching user");
        setDomainStatus("false");
      }
    }
  };

  useEffect(() => {
    if (domain) {
      setDomain(domain);
    }
  }, [router.query.slug, domain]);

  useEffect(() => {
    if (domain) {
      const fetchData = async () => {
        try {
          if (!userDataReceived && !domainDataReceived) {
            await Promise.all([getDomaindetails(domain, walletAddress, chain), getUserDetails(walletAddress, chain)]);
          }
        } catch {
          setDomainStatus("false");
        }
      };

      fetchData();
    }
  }, [domain]); // Specify dependencies

  useEffect(() => {
    if (userDataReceived && domainDataReceived) {
      setDomainStatus("true");
    }
  }, [userDataReceived, domainDataReceived]);

  useEffect(() => {
    setDomain(Array.isArray(router.query.domain) ? router.query.domain[0] : router.query.domain || "");
    console.log(router.query.domain);
  }, [router.query.domain]);

  return (
    <Page name="settings">
      <Container>
        {domainStatus === "true" ? (
          <>
            <TabView domainName={domainDetails?.domainName} domain={domainDetails.domain} user={userDetails.user} />
          </>
        ) : (
          <div className="py-[200px]">
            <NotFound label="You don't have profile" />
          </div>
          // <p className="w-full text-main-300 h-[50vh] pt-[100px] inline-flex items-center justify-center text-[50px] uppercase">
          //   No profile
          // </p>
        )}
      </Container>
    </Page>
  );
};

export default Setting;
