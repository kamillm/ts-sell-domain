import { useReadContract } from "wagmi";
import { baseAbi } from "./baseAbi";
import { useContractAddressByChain } from "./useContractAddressByChain";

export const useDomainLookup = (tokenId: number) => {
  const contractAddress = useContractAddressByChain();
  const { data: domainInfo } = useReadContract({
    abi: baseAbi,
    address: contractAddress as `0x${string}`,
    functionName: "registryLookupById",
    args: [tokenId]
  });

  return { domainInfo };
};
