import { useReadContract, useAccount, useBalance } from "wagmi";
// import { baseAbi } from "./baseAbi";
import { polyAbi } from "./polyAbi";
import { formatEther } from "viem";
import { useContractAddressByChain } from "./useContractAddressByChain";

export const usePriceToRegister = (len: number) => {
  const contractAddress = useContractAddressByChain();
  const { data: price } = useReadContract({
    abi: polyAbi,
    address: contractAddress as `0x${string}`,
    functionName: "priceToRegister",
    args: [len]
  });
  let priceInEther;
  if (price) {
    priceInEther = formatEther(price as bigint);
  }
  const { address } = useAccount();
  const { data } = useBalance({ address: address });
  const symbol = data?.symbol;
  return { priceInEther, symbol };
};
