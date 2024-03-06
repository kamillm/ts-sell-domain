import { abi } from "./abi";
import { useReadContract } from "wagmi";
const contractAddress = "0x896704641275a31C9D55430F0f636ED2E383Cc9a";

export const useDomainDetails = (domainName: string) => {
  const { data: domainData, queryKey: domainQuery } = useReadContract({
    abi: abi,
    address: contractAddress,
    functionName: "registryLookupByName",
    args: [domainName]
  });
  return { domainData, domainQuery };
};
