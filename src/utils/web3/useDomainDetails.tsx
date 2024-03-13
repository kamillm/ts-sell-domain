// import { baseAbi } from "./baseAbi";
import { polyAbi } from "./polyAbi";
import { useReadContract } from "wagmi";
import { useContractAddressByChain } from "./useContractAddressByChain";

export const useDomainDetails = (domainName: string) => {
  const contractAddress = useContractAddressByChain();
  const { data: domainData, queryKey: domainQuery } = useReadContract({
    abi: polyAbi,
    address: contractAddress as `0x${string}`,
    functionName: "registryLookupByName",
    args: [domainName]
  });
  return { domainData, domainQuery };
};
