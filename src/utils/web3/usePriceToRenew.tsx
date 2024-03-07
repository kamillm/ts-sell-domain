import { useReadContract, useAccount, useBalance } from "wagmi";
import { baseAbi } from "./baseAbi";
import { formatEther } from "viem";
import { useContractAddressByChain } from "./useContractAddressByChain";

export const usePriceToRenew = (len: number) => {
  const contractAddress = useContractAddressByChain();
  const { data: renewPrice } = useReadContract({
    abi: baseAbi,
    address: contractAddress as `0x${string}`,
    functionName: "priceToRenew",
    args: [len]
  });
  let renewPriceInEther;
  if (renewPrice) {
    renewPriceInEther = formatEther(renewPrice as bigint);
  }
  const { address } = useAccount();
  const { data } = useBalance({ address: address });
  const symbol = data?.symbol;
  return { renewPriceInEther, symbol };
};
