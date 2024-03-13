import { useReadContracts } from "wagmi";
// import { baseAbi } from "./baseAbi";
import { polyAbi } from "./polyAbi";
import { useContractAddressByChain } from "./useContractAddressByChain";
import { useUserLookup } from "@/utils/web3/useUserLookup";

export const useDomainLookup = () => {
  const { userDomains } = useUserLookup();
  const contractAddress = useContractAddressByChain();

  const allOwnedDomains = (userDomains as { allOwnedDomains: Array<bigint> })?.allOwnedDomains;

  //Domain Lookup
  const contractCallConfigs: any = allOwnedDomains?.map(
    (domainId) =>
      ({
        abi: polyAbi,
        address: contractAddress as `0x${string}`,
        functionName: "registryLookupById",
        args: [domainId]
      }) as const
  );
  const { data: domainInfo }: any = useReadContracts({ contracts: contractCallConfigs });
  const domainList = domainInfo?.map((item: any) => item.result) ?? [];

  //Domain URI Lookup
  const contractCallUris: any = allOwnedDomains?.map(
    (domainId) =>
      ({
        abi: polyAbi,
        address: contractAddress as `0x${string}`,
        functionName: "tokenURI",
        args: [domainId]
      }) as const
  );

  const { data: domainUris }: any = useReadContracts({ contracts: contractCallUris });
  const domainUrisList = domainUris?.map((item: any) => item.result) ?? [];

  return { domainList, domainUrisList, allOwnedDomains, userDomains };
};
