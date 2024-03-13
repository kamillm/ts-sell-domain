// import { baseAbi } from "./baseAbi";
import { polyAbi } from "./polyAbi";
import { useReadContract } from "wagmi";
import { useContractAddressByChain } from "./useContractAddressByChain";

export const useTokenUriLookup = (domainName: string) => {
  const contractAddress = useContractAddressByChain();
  const { data: domainId } = useReadContract({
    abi: polyAbi,
    address: contractAddress as `0x${string}`,
    functionName: "domainLookup",
    args: [domainName]
  });
  const { data: domainUri } = useReadContract({
    abi: polyAbi,
    address: contractAddress as `0x${string}`,
    functionName: "tokenURI",
    args: [domainId]
  });
  return { domainUri };
};
