import { useReadContract, useAccount } from "wagmi";
import { baseAbi } from "./baseAbi";
import { useContractAddressByChain } from "./useContractAddressByChain";

export const useUserLookup = () => {
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
