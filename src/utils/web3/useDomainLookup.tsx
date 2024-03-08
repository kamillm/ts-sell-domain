import { useReadContract, useAccount } from "wagmi";
import { baseAbi } from "./baseAbi";
import { useContractAddressByChain } from "./useContractAddressByChain";

export const useDomainLookup = () => {
  const contractAddress = useContractAddressByChain();
  const { address } = useAccount();
  const { data: userDomains } = useReadContract({
    abi: baseAbi,
    address: contractAddress as `0x${string}`,
    functionName: "userLookupByAddress",
    args: [address]
  });

  return { userDomains };
};
